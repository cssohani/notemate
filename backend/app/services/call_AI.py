import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("API_KEY")

def summarize_text(text: str) -> str:
    
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",   # or gpt-4o if you want better quality
        messages=[
            {"role": "system", "content": "You are a note-taking assistant."},
            {"role": "user", "content": f"Summarize this lecture into clear, structured notes:\n\n{text}"}
        ],
        max_tokens=800
    )
    return response.choices[0].message["content"]
