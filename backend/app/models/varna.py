from datetime import datetime
from backend.app.models import db


class Varna(db.Model):
    __tablename__ = 'varnas'

    id = db.Column(db.Integer, primary_key=True)
    character = db.Column(db.String(1), nullable=False)
    devanagari = db.Column(db.String(10), nullable=False)
    iast = db.Column(db.String(10), nullable=False)
    itrans = db.Column(db.String(10), nullable=False)
    sthana = db.Column(db.String(50), nullable=True)
    prayatna = db.Column(db.String(50), nullable=True)
    audio_url = db.Column(db.String(255), nullable=True)
    category = db.Column(db.String(20), nullable=True)
