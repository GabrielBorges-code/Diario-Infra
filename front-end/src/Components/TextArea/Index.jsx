import style from "./style.module.css";

function TextArea({label, type}) {
    return(
        <>
            <label className={style.label} htmlFor={label}>{label}</label>
            <textarea className={style.textarea} type={type} placeholder={label} name="" id={label} ></textarea>

            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        </>
    );
}

export default TextArea;