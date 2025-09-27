from fastapi import APIRouter, UploadFile, Form
import os
from app.services import youtube_reader, video_file_reader, audio_to_text, file_reader, url_reader, call_AI

router = APIRouter(prefix="/summarize", tags=["Summarize"])

@router.post("/file")
async def summarize_file(file: UploadFile):
    notes = await file_reader.extract_text(file)
    summary = call_AI.summarize_text(notes)
    return {"summary": summary}

@router.post("/url")
async def summarize_url(url: str = Form(...)):
    notes = url_reader.extract_text(url)
    summary = call_AI.summarize_text(notes)
    return {"summary": summary}

@router.post("/video")
async def summarize_video(file: UploadFile):
    temp_path = f"temp_{file.filename}"
    with open(temp_path, "wb") as buffer:
        buffer.write(await file.read())

    audio_path = video_file_reader.extract_audio(temp_path)
    text = audio_to_text.transcribe_audio(audio_path)
    summary = call_AI.summarize_text(text)

    os.remove(temp_path)
    os.remove(audio_path)

    return {"summary": summary}

@router.post("/youtube")
async def summarize_youtube(url: str = Form(...)):
    try:
        audio_path = youtube_reader.download_youtube_audio(url)
        text = audio_to_text.transcribe_audio(audio_path)
        summary = call_AI.summarize_text(text)
        os.remove(audio_path)
        return {"summary": summary}
    except Exception as e:
        return {"error": str(e)}