from . import db
from sqlalchemy.sql import func

class Flashcards(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    term = db.Column(db.String(255), nullable=False)
    definition = db.Column(db.Text, nullable=False)