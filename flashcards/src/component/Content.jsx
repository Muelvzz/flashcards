import '../css/content.css'
import Card from './Cards.jsx'

export default function Content() {
    return (
        <>
            <div className="container">
                <div className="flashcard-header">
                    <h1>Flashcards</h1>
                    <h4>Built by Muelvin Lopez</h4>
                </div>
                <div className="card-section">
                    < Card/>
                </div>
            </div>
        </>
    )
}