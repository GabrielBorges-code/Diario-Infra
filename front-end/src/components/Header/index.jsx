import { Link } from "react-router-dom";

import icon from "../../assets/icons/monitoring.png";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.heading}>
      <nav className={styles.navBar}>
        <Link to="/"><img src={icon} alt="img monitoring" /></Link>

        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/registro-de-chamados">Registro de Chamados</Link>
            </li>
            <li className={styles.item}>
                <Link to="/chamados-anteriores">Chamados Anteriores</Link>
            </li>
        </ul>
        
      </nav>

    </header>
  );
}
