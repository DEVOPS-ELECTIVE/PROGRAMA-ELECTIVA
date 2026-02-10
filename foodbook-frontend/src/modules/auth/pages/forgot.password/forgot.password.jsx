import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgot-password.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleForgottenPassword = (e) => {
        e.preventDefault();

        if (!identifier) {
            setError("Por favor, ingresa tu correo electrónico.");
            setMessage("");
            return;
        }

        setError("");
        setMessage(`Hemos enviado un enlace de recuperación a "${identifier}" si existe en nuestro sistema.`);
        
        setIdentifier("");
    };

    return (
        <div className="forgot-container">
            <div className="forgot-card">
                <div className="forgot-header">
                    <h2>Recuperar acceso</h2>
                    <p className="description">
                        Introduce tu correo electrónico y te enviaremos las instrucciones.
                    </p>
                </div>

                <form onSubmit={handleForgottenPassword} className="forgot-form">
                    <div className="form-group">
                        <label htmlFor="identifier">Correo electrónico</label>
                        <input
                            id="identifier"
                            type="text"
                            placeholder="ej. usuario@foodbook.com"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                    </div>

                    {error && <div className="status-message error">{error}</div>}
                    {message && <div className="status-message success">{message}</div>}

                    <button type="submit" className="action-button">
                        Enviar enlace
                    </button>
                </form>

                <div className="forgot-footer">
                    <p onClick={() => navigate("/")} className="back-link">
                        ← Volver al Login
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;