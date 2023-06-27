import { useState } from "react";

export const StudentAdd = ({ createStudent }) => {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (value.trim().length > 0) {
      createStudent(value);
    }

    setValue("");
  };

  return (
    <>
      <h3 className="mb-5">Agregar Estudiante</h3>

      <form onSubmit={submit}>
        <input
          type="text"
          className="form-control"
          placeholder="Ingresar un estudiante"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};
