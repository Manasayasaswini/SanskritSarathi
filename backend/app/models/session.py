from datetime import datetime
from backend.app.models import db


class PracticeSession(db.Model):
    __tablename__ = 'practice_sessions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    varna_id = db.Column(db.Integer, db.ForeignKey('varnas.id'), nullable=True)
    score = db.Column(db.Float, nullable=True)
    feedback_json = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
