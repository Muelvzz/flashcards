from flask import render_template, Blueprint, request, redirect, url_for, jsonify
from .models import Flashcards
from . import db

views = Blueprint("views", __name__)

@views.route("/", methods=["POST", "GET"])
def welcome():

    if request.method == "POST":
        term = request.form.get("flashcard-term")
        definition = request.form.get("flashcard-definition")

        flashcard = Flashcards(term=term, definition=definition)
        db.session.add(flashcard)
        db.session.commit()

        return redirect(url_for("views.welcome"))

    return render_template("index.html")

@views.route("/api/data")
def get_data():
    flashcards = Flashcards.query.all()
    sets = {}

    for card in flashcards:
        sets[card.term] = card.definition

    return sets