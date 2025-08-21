"""
Create an interactive flashcard app where users can:
    View one flashcard at a time
    Flip the card to see the answer
    Skip to another random card
    Add their own new flashcards
    Delete any existing flashcard

Key Features
    ✅ Flip cards to reveal answers
    ✅ Randomized next-card selection
    ✅ Form for adding new cards
    ✅ Deletion with a single click
    ✅ Fully working Flask backend
    ✅ Session-based state tracking
"""
from website import create_app

if __name__ == "__main__":
    main = create_app()
    main.run(debug=True)