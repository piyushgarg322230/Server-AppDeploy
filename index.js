const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// APK download API
app.get("/download-apk", (req, res) => {
  const apkPath = path.join(__dirname, "apks", "app-release.apk");

  if (!fs.existsSync(apkPath)) {
    return res.status(404).send("APK not found in Current Directory");
  }

  res.setHeader("Content-Type", "application/vnd.android.package-archive");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=MyApp.apk"
  );

  const fileStream = fs.createReadStream(apkPath);
  fileStream.pipe(res);
});

// Server start
app.listen(PORT, () => {
  console.log(`APK Server running on http://localhost:${PORT}`);
});
