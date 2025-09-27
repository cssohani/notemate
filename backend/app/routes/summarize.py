from fastapi import APIRouter, UploadFile, Form
from app.services import file_reader, url_reader, call_AI

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