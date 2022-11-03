import style from "./style.module.css";

import { Controller } from "react-hook-form";

export default function Input({ label, type, name, control, value, onChange }) {
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
            // value={value}
            // onChange={onChange}
            name={name}
            id={label}
          />
        )}
      />
    </>
  );
}
