import styles from "./styles.module.css";

import { Controller } from "react-hook-form";

export default function TextArea({ label, type, name, control }) {
  return (
    <>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            control={control}
            className={styles.textarea}
            type={type}
            name={name}
            id={label}
          ></textarea>
        )}
      />
    </>
  );
}
