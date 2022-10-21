import { Link } from "react-router-dom"
import "./style.css";
function Header() {
    return (
        <header>
            <h2>Aqui é o header</h2>
            <div class = "menu">
                <Link to ="/">Home</Link>
                <Link to ="/sobre">Sobre</Link>
                <Link to ="/contato">Contato</Link>
            </div>
        </header>
    );
}

export default Header;