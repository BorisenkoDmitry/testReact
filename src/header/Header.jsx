import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoggedIn } from './LoggedIn/LoggedIn';
import { Container } from '../UI/UI';
import { Logo } from './Logo/Logo';
export default function Header() {
  const isLogin = useSelector(state => state.authReducer.isLoginIn)
  const LinkTo = (link) => {
    return localStorage.getItem("user") ? link : "/login"
  }
  return (
    <header className="header">
      <Container className="header__container">
        <Logo />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item"><NavLink className="header__link" to="/">На главную</NavLink></li>
            <li className="header__item"><NavLink className="header__link" to={LinkTo("/today")}>Сегодня</NavLink></li>
            <li className="header__item"><NavLink className="header__link" to={LinkTo("/animal")}>Животные</NavLink></li>
          </ul>
          {localStorage.getItem("user") ?
            <LoggedIn /> :
            <Link className="header__join" to="/login">Личный кабинет</Link>
          }
        </nav>
      </Container>
    </header>
  )
}