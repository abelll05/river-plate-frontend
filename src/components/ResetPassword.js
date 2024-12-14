import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams(); // Esto captura el token de la URL
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Aquí puedes validar el token, si lo deseas
    if (!token) {
      setError("Token inválido.");
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Enviar la nueva contraseña al backend
    // Asegúrate de enviar el token junto con la nueva contraseña
    fetch(`/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // Redirige a la página de login o muestra un mensaje de éxito
          alert("Contraseña restablecida correctamente.");
        }
      })
      .catch((err) => setError("Hubo un error al restablecer la contraseña."));
  };

  return (
    <div>
      <h2>Restablecer contraseña</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contraseña nueva:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Restablecer contraseña</button>
      </form>
    </div>
  );
}

export default ResetPassword;
