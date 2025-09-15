import '../css/nav.css'

export default function Nav() {
    return (
        <>
            <header>
                <nav>
                    <div className="nav-container">
                        <ul>
                            <div className="left">
                                <li>
                                    <img src='/images/logo.png' alt="Logo" />
                                    Flashcards
                                </li>
                            </div>
                            <div className="right">
                                <li>
                                    <img src='/images/community.png' alt="Community Icon" />
                                    Community
                                </li>
                                <li>
                                    <img src='/images/library.png' alt="Library Icon" />
                                    My Library
                                </li>                           
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}