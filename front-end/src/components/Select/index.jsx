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
        rules={{ required: true }}
        render={({ field }) => (
          <select
            defaultValue={'DEFAULT'}
            {...field}
            className={styles.select}
            name={name}
            id={label}
          >
            <option value="DEFAULT" disabled>Escolha uma opção...</option>
            {options.map((option, id) => {
              return (
                <option value={option} key={id}>
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
