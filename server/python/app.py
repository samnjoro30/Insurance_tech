from fastapi import FastAPI
from AI_controller import test1
from pydantic import BaseModel
from AI_controller.logic import get_response

app = FastAPI()

class Message(BaseModel):
    message: str
    
app.include_router(test1.router, prefix="/auth")

@app.get("/")
def read_root():
    return { "Message" : "welcome to Insurance"}


@app.post("/chatbot")
def chatbot(msg: Message):
    reply = get_response(msg.message)
    return {"response": reply}