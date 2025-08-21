from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path

db = SQLAlchemy()
DB_NAME = "flashcards_database.db"

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "helloworld123"
    app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{DB_NAME}"
    db.__init__(app)

    from .views import views

    app.register_blueprint(views, url_prefix="/")

    from .models import Flashcards

    create_database(app)

    return app

def create_database(app):
    if not path.exists("website/" + DB_NAME):
        with app.app_context():
            db.create_all()
        print("Database created!")