import style from "./style.module.css";

function Select({ label, options }) {
  return (
    <>
      <label className={style.label} htmlFor={label}>{label}</label>
      <select className={style.select} name="" id={label}>
        <option disabled value="">
          Escolha
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option.key}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
