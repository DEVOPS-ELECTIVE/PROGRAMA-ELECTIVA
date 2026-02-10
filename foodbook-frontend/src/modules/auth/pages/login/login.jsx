import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!identifier || !password) {
            setError("Por favor, completa todos los campos");
            return;
        }

        try {
            setError("");
            const user = await login(identifier, password);
            console.log("Usuario autenticado: ", user);
            alert(`Bienvenido ${user.name}`);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Välkommen</h2> 
                    <p className="subtitle">Inicia sesión en FoodBook Pro</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="identifier">Usuario</label>
                        <input
                            id="identifier"
                            type="text"
                            placeholder="nombre@ejemplo.com"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="login-button">
                        Iniciar Sesión
                    </button>
                </form>

                <div className="login-footer">
                    <p onClick={() => navigate("/forgot.password")} className="link-text">
                        ¿Olvidaste tu contraseña?
                    </p>
                    <div className="divider"></div>
                    <p className="signup-text">
                        ¿No tienes cuenta?{" "}
                        <span onClick={() => navigate("/register")} className="link-text bold">
                            Crear cuenta
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;