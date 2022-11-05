import {IMaskInput} from "react-imask";

import { Controller } from "react-hook-form";

import style from "./style.module.css";

export default function Input({ label, name, control, mask, placeholder, type, value, onChange }) {
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
          <IMaskInput
            {...field}
            control={control}
            className={style.input}
            unmask={true} 
            mask={mask}
            placeholder={placeholder}
            name={name}
            id={label}
            // type={type}
            // placeholder={label}
            // value={value}
            // onChange={onChange}
          />
        )}
      />
    </>
  );
}
