import style from "./style.module.css";

export default function Button({text, type, onClick}) {
    return(
        <button onClick={onClick} type={type} className={style.button}>
            {text}
        </button>
    );
}
