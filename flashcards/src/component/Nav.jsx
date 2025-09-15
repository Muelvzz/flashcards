import '../css/nav.css'
import library from '/images/library.png'
import community from '/images/community.png'
import logo from '/images/logo.png'

export default function Nav() {
    return (
        <>
            <header>
                <nav>
                    <div className="nav-container">
                        <ul>
                            <div className="left">
                                <li>
                                    <img src={logo} alt="Logo" />
                                    Flashcards
                                </li>
                            </div>
                            <div className="right">
                                <li>
                                    <img src={community} alt="Community Icon" />
                                    Community
                                </li>
                                <li>
                                    <img src={library} alt="Library Icon" />
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