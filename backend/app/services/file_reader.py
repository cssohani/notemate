from fastapi import UploadFile

async def extract_text(file: UploadFile) -> str:
    
    contents = await file.read()
    try:
        return contents.decode("utf-8")
    except:
        return "File format not yet supported."

