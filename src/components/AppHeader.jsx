

export default function AppHeader() {

/*const menu = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];*/
    
    return (
        <header className="allineamento">
            <figure>
                <img className="dc-logo" src="/dc-logo.png" alt="dc-logo.png" />
            </figure>
            <nav className="menu">
                <a href="">CHARACTERS</a>
                <a href="">COMICS</a>
                <a href="">MOVIES</a>
                <a href="">TV</a>
                <a href="">GAMES</a>
                <a href="">COLLECTIBLES</a>
                <a href="">VIDEOS</a>
                <a href="">FANS</a>
                <a href="">NEWS</a>
                <a href="">SHOP</a>
            </nav>
        </header>
    )
}