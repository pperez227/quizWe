"use client";
import { useState, type FormEvent } from "react";

export default function Formulario() {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState({ username: "", lastname: "", age: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted({ username, lastname, age });
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" style={{ color: "white" }}>
        Username:
      </label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        style= {{ color: "white", borderColor: "white", backgroundColor: "black", borderWidth: "1px", borderStyle: "solid", padding: "5px", marginBottom: "10px" 

        }}
      />
      </div>
    <div>
        <label htmlFor="lastname"
      style={{ color: "white" }}
      >Lastname:</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
        style= {{ color: "white", borderColor: "white", backgroundColor: "black", borderWidth: "1px", borderStyle: "solid", padding: "5px", marginBottom: "10px"}}
      />
    </div>
      
    <div>
 
      <label htmlFor="age" style={{ color: "white" }}>
        Age:
      </label>
      <input
        id="age"
        name="age"
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        style= {{ color: "white", borderColor: "white", backgroundColor: "black", borderWidth: "1px", borderStyle: "solid", padding: "5px", marginBottom: "10px"}}
      />


    </div>

      <button type="submit"
      style= {{ color: "white", backgroundColor: "blue", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Submit</button>
    </form>

    <div>
      <p>Nombre: {submitted.username.toUpperCase()}</p>
      <p>Apellido: {submitted.lastname.toUpperCase()}</p>
      <p>Edad: {submitted.age}</p>
    </div>


    </div>

    

  );
}