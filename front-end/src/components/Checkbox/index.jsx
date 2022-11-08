import React from "react";

import { Controller } from "react-hook-form";

import styles from "./styles.module.css";

export default function Checkbox({ label, name, control }) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        // rules={{ required: true }}
        render={({ field }) => (
          <input {...field} type="checkbox" name={name} id={label} />
        )}
      />
      <label className={styles.text} htmlFor={label}>
        {label}
      </label>
      <br />
    </>
  );
}
