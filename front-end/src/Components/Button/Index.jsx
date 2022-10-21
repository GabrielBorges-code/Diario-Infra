import style from "./style.module.css";

function Button({text, type}) {
    return(
        <button type={type} className={style.button}>
            {text}
        </button>
    );
}

export default Button;