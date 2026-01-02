const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// APK download API
app.get("/download-apk", (req, res) => {
  const apkPath = path.join(__dirname, "apks", "myapp.apk");

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

app.get("/helix-jump-stack-ball-3D-game-apk", (req, res) => {
  const apkPath = path.join(__dirname, "apks", "helixjump.apk");

  if (!fs.existsSync(apkPath)) {
    return res.status(404).send("APK not found in Current Directory");
  }

  res.setHeader("Content-Type", "application/vnd.android.package-archive");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=HelixJump.apk"
  );

  const fileStream = fs.createReadStream(apkPath);
  fileStream.pipe(res);
});

app.get("/Ben&Bart", (req, res) => {
  const apkPath = path.join(__dirname, "apks", "helixjump.apk");

  if (!fs.existsSync(apkPath)) {
    return res.status(404).send("APK not found in Current Directory");
  }

  res.setHeader("Content-Type", "application/vnd.android.package-archive");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=HelixJump.apk"
  );

  const fileStream = fs.createReadStream(apkPath);
  fileStream.pipe(res);
});

// Server start
app.listen(PORT, () => {
  console.log(`APK Server running on http://localhost:${PORT}`);
});
