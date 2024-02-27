import Logo from "./Logo.tsx";

const Header = () => {
    return (
        <div>
            <nav
                className="fixed w-full z-10 top-0 start-0 "
            >
                NavBar
                <Logo/>
            </nav>
        </div>
    );
};

export default Header;
