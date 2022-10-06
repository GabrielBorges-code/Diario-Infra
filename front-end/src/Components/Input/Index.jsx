import style from "./style.module.css";

function Input({label, type}) {
    return(
        <>
            <label className={style.label} htmlFor={label}>{label}</label>
            <input className={style.input} type={type} placeholder={label} name="" id={label} />
        </>
    );
}

export default Input;