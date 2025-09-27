from pydantic import BaseModel

class SummaryRequest(BaseModel):
    prompt: str

class SummaryResponse(BaseModel):
    summary: str
