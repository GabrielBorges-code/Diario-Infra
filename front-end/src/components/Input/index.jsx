import { IMaskInput } from "react-imask";

import { Controller } from "react-hook-form";

import styles from "./styles.module.css";

export default function Input({
  label,
  name,
  control,
  mask,
  placeholder
}) {
  return (
    <>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <IMaskInput
            required
            {...field}
            control={control}
            className={styles.input}
            unmask={true}
            mask={mask}
            placeholder={placeholder}
            name={name}
            id={label}
          />
        )}
      />
    </>
  );
}
