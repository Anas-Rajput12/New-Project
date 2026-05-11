from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database.connection import get_db
from app.models.models import Team, TeamMember, User
from app.schemas.schemas import TeamCreate, TeamResponse
from app.middleware.auth import get_current_user

router = APIRouter()

@router.post("/create", response_model=TeamResponse, status_code=status.HTTP_201_CREATED)
async def create_team(
    team: TeamCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Create a new team"""
    new_team = Team(
        team_name=team.team_name,
        owner_id=current_user.id
    )
    db.add(new_team)
    db.commit()
    db.refresh(new_team)

    # Add creator as team member
    team_member = TeamMember(
        team_id=new_team.id,
        user_id=current_user.id,
        role="owner"
    )
    db.add(team_member)
    db.commit()

    return new_team

@router.get("/list", response_model=List[TeamResponse])
async def list_teams(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Get all teams for current user"""
    team_memberships = db.query(TeamMember).filter(TeamMember.user_id == current_user.id).all()
    teams = [membership.team for membership in team_memberships]
    return teams

@router.post("/{team_id}/invite/{user_id}")
async def invite_to_team(
    team_id: int,
    user_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Invite a user to team"""
    # Check if current user is team owner
    team = db.query(Team).filter(Team.id == team_id, Team.owner_id == current_user.id).first()
    if not team:
        raise HTTPException(status_code=403, detail="Not authorized")

    # Check if user exists
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Add user to team
    team_member = TeamMember(
        team_id=team_id,
        user_id=user_id,
        role="member"
    )
    db.add(team_member)
    db.commit()

    return {"message": "User invited successfully"}
