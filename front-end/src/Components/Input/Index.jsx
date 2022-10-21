import style from "./style.module.css";

import { Controller } from "react-hook-form";

function Input({ label, type, name, control }) {
  return (
    <>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        // rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            control={control}
            className={style.input}
            type={type}
            // placeholder={label}
            name={name}
            id={label}
          />
        )}
      />

      {/* <input
        control={control}
        className={style.input}
        type={type}
        placeholder={label}
        name={name}
        id={label}
      /> */}
    </>
  );
}

export default Input;
