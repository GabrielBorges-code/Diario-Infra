import styles from "./styles.module.css";

export default function Button({text, type, onClick}) {
    return(
        <button onClick={onClick} type={type} className={styles.button}>
            {text}
        </button>
    );
}
