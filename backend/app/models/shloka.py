from datetime import datetime
from backend.app.models import db


class Shloka(db.Model):
    __tablename__ = 'shlokas'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    translation = db.Column(db.Text, nullable=True)
    chapter = db.Column(db.Integer, nullable=False)
    verse = db.Column(db.Integer, nullable=False)
    audio_path = db.Column(db.String(255), nullable=True)
    difficulty = db.Column(db.Integer, default=1)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
