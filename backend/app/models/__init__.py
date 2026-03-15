from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from backend.app.models.user import User
from backend.app.models.varna import Varna
from backend.app.models.shloka import Shloka
from backend.app.models.session import Session

__all__ = ['db', 'User', 'Varna', 'Shloka', 'Session']
