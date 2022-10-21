import style from "./style.module.css";

export default function Button({text, type}) {
    return(
        <button type={type} className={style.button}>
            {text}
        </button>
    );
}
