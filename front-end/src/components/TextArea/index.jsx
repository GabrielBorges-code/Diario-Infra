import style from "./style.module.css";

import { Controller } from "react-hook-form";

export default function TextArea({ label, type, name, control }) {
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
          <textarea
            {...field}
            control={control}
            className={style.textarea}
            type={type}
            name={name}
            id={label}
          ></textarea>
        )}
      />
    </>
  );
}
