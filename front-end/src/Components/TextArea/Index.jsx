import style from "./style.module.css";

import { Controller } from "react-hook-form";

function TextArea({ label, type, name, control }) {
  return (
    <>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <textarea
            {...field}
            control={control}
            className={style.textarea}
            type={type}
            //   placeholder={label}
            name={name}
            id={label}
          ></textarea>
        )}
      />

      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    </>
  );
}

export default TextArea;
