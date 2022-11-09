import { IMaskInput } from "react-imask";

import { Controller } from "react-hook-form";

import styles from "./styles.module.css";

export default function Input({
  label,
  name,
  control,
  mask,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <>
      <label className={styles.label} htmlFor={label}>
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
            className={styles.input}
            unmask={true}
            mask={mask}
            placeholder={placeholder}
            name={name}
            id={label}
            required={true}
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
