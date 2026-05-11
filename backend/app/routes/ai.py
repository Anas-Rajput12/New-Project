from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.database.connection import get_db
from app.models.models import Chat, User
from app.schemas.schemas import ChatRequest, ChatResponse
from app.middleware.auth import get_current_user
from app.services.ai_service import generate_ai_response

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat_with_ai(
    chat_request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Send a message to AI assistant and get response"""
    # Generate AI response (placeholder - integrate with OpenAI API)
    ai_response = generate_ai_response(chat_request.message)

    # Save chat to database
    new_chat = Chat(
        message=chat_request.message,
        response=ai_response,
        user_id=current_user.id
    )
    db.add(new_chat)
    db.commit()
    db.refresh(new_chat)

    return new_chat

@router.get("/history", response_model=List[ChatResponse])
async def get_chat_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
    limit: int = 50
):
    """Get chat history for current user"""
    chats = db.query(Chat).filter(Chat.user_id == current_user.id).order_by(Chat.created_at.desc()).limit(limit).all()
    return chats

@router.post("/voice")
async def voice_command(
    current_user: User = Depends(get_current_user)
):
    """Process voice command (placeholder for future implementation)"""
    return {"message": "Voice command processing - Coming soon!"}
