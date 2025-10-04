import yt_dlp

import os
def download_youtube_audio(url: str, output_path: str = "yt_audio") -> str:
    ydl_opts = {
        "format": "bestaudio/best",
        "outtmpl": output_path,
        "quiet": True,
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": "192",
            }
        ],
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        final_path = output_path + ".mp3"
        if not os.path.exists(final_path):
            raise FileNotFoundError(f"Expected audio file not found: {final_path}")
        return final_path
    except Exception as e:
        # Bubble the error up to FastAPI
        raise RuntimeError(f"Failed to download YouTube audio: {str(e)}")



