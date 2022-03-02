import "./Logo.css";
import { LogoSvg } from "./LogoSvg";

export const Logo = () => {
    return (
        <a href="/" className="header__logo">
            <LogoSvg />
            Save you
        </a>
    )
}