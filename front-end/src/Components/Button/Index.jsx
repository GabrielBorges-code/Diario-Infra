import style from "./style.module.css";

function Button({text}) {
    return(
        <button className={style.button}>
            {text}
        </button>
    );
}

export default Button;