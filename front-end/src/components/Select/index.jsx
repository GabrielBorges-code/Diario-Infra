import style from "./style.module.css";

import { Controller } from "react-hook-form";

export default function Select({ label, options, name, control }) {
  return (
    <>
      <label className={style.label} htmlFor={label}>{label}</label>

      <Controller
        name={name}
        control={control}
        // rules={{ required: true }}
        render={({ field }) => (
          <select {...field} className={style.select} name={name} id={label}>
          <option disabled selected>
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
        )}
      />
    </>
  );
}
