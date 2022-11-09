import styles from "./styles.module.css";
import githubicon from "../../assets/icons/github_2.png";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <a href="https://github.com/GabrielBorges-code/Diario-Infra" target="_blank" rel="noopener noreferrer">
                <img src={githubicon} alt="github icon" />
            </a>

            <p>Feito pela <span>equipe NOC</span> &copy; 2022</p>
        </footer>
    );
}

// Footer;
