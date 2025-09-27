import yt_dlp

def download_youtube_audio(url: str, output_path: str = "yt_audio.mp3") -> str:
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
        return output_path
    except Exception as e:
        # Bubble the error up to FastAPI
        raise RuntimeError(f"Failed to download YouTube audio: {str(e)}")



