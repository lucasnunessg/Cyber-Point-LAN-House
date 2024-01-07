import './Header.css';

function Header() {
    return (
        <header className="header">
                <h1>Cyber Point</h1>
            <div className="contacts">
                <h2>Contatos:</h2>
                <p>{`WhatsApp: (55) 9 9990 9852`}</p>
                <p>{`Instagram: _cyberpoint`}</p>
            </div>
        </header>
    );
}

export default Header;
