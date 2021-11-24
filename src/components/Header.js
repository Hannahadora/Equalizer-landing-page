import Logo from '../images/logo.svg'

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" />

            <div className="header-pack">
                <h1 className="header-title">We make your music sound extraordinary.</h1>
                <p className="header-text">A system audio equalizer specifically designed for Android and iOS. Freely tune the
                    way your music sounds with a professional grade parametric EQ & volume mixer. Control
                    bass, mids, treble, gain control, reverb, and more!
                </p>
            </div>
        </div>
    );
}

export default Header;