from datetime import datetime
from backend.app.models import db


class Shloka(db.Model):
    __tablename__ = 'shlokas'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=True)
    devanagari = db.Column(db.Text, nullable=False)
    transliteration = db.Column(db.Text, nullable=True)
    meaning = db.Column(db.Text, nullable=True)
    audio_url = db.Column(db.String(255), nullable=True)
