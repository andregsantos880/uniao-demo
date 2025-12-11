import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../data/content';
import styles from './Header.module.css';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label="Página inicial União">
            <img src="/logo.svg" alt="Logo União" loading="lazy" />
          </Link>
          <nav className={styles.nav} aria-label="Principal">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className={styles.actions}>
            <button className="btn btn-primary" type="button">
              Loja online
            </button>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="Abrir menu"
            >
              Menu
            </button>
          </div>
        </div>
        {open && (
          <div className={styles.mobileMenu}>
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
