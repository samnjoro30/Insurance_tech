from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/AI-Trial")
def trial():
    print("Insurance AI")