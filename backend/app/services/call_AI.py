import os
from dotenv import load_dotenv
from openai import OpenAI

# Load .env file
load_dotenv()

# Create OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def summarize_text(text: str) -> str:
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",   # or "gpt-4o"
            messages=[
                {"role": "system", "content": "You are a helpful note-taking assistant."},
                {"role": "user", "content": f"Summarize this lecture into clear, structured notes:\n\n{text}"}
            ],
            max_tokens=800
        )

        return response.choices[0].message.content

    except Exception as e:
        # Instead of a 500 crash, return an error message
        return f"Error in AI call: {str(e)}"


