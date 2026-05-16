const express = require("express");
const cors = require("cors");
const ytdlp = require("yt-dlp-exec");
const path = require("path");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("QuickToolsHub API Running");
});

// GERÇEK DOWNLOAD LINK ÜRETİCİ
app.get("/download", async (req, res) => {

  const url = req.query.url;
  const format = req.query.format || "mp4";

  if (!url) {
    return res.status(400).json({ error: "url gerekli" });
  }

  try {

    const output = path.join("/tmp", "%(title)s.%(ext)s");

    const args = format === "mp3"
      ? [
          url,
          "-x",
          "--audio-format", "mp3",
          "-o", output
        ]
      : [
          url,
          "-f", "mp4",
          "-o", output
        ];

    await ytdlp.exec(args);

    res.json({
      success: true,
      message: "İndirme tamamlandı (server içinde)",
      note: "Render free plan dosya indirmeyi kalıcı vermez. gerçek sistem için storage gerekir"
    });

  } catch (err) {
    res.status(500).json({
      error: "Download failed",
      detail: err.message
    });
  }

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
