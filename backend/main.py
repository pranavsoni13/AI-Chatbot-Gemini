from fastapi import FastAPI
from pydantic import BaseModel
from gemini_service import generate_reply
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS (React connection fix)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def home():
    return {"message": "Backend is running"}

@app.post("/chat")
def chat(req: ChatRequest):
    reply = generate_reply(req.message)
    return {"response": reply}