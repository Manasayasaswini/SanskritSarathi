from datetime import datetime
from backend.app.models import db


class Varna(db.Model):
    __tablename__ = 'varnas'

    id = db.Column(db.Integer, primary_key=True)
    char = db.Column(db.String(1), nullable=False, unique=True)
    name = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    audio_path = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
