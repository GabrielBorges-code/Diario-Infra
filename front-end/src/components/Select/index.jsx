import styles from "./styles.module.css";

import { Controller } from "react-hook-form";

export default function Select({ label, options, name, control }) {
  return (
    <>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            required={true}
            {...field}
            className={styles.select}
            name={name}
            id={label}
          >
            {/* <option selected={true} disabled>Escolha</option> */}
            {options.map((option) => {
              return (
                <option key={option} defaultValue={option.key}>
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
