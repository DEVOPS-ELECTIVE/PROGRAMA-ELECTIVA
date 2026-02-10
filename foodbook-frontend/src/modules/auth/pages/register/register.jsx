import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const { name, lastName, email, phone, password, confirmPassword } = form;

        if (!name || !lastName || !email || !phone || !password || !confirmPassword) {
            setError("Por favor, completa todos los campos.");
            setMessage("");
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            setMessage("");
            return;
        }

        setError("");
        setMessage("¡Cuenta creada exitosamente!");
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h2>Crear Cuenta</h2>
                    <p className="subtitle">Únete a FoodBook y descubre la gastronomía nórdica.</p>
                </div>

                <form onSubmit={handleRegister} className="register-form">
                    
                    <div className="form-row">
                        <div className="form-group half">
                            <label>Nombre</label>
                            <input
                                name="name"
                                placeholder="Ej. Bjorn"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group half">
                            <label>Apellido</label>
                            <input
                                name="lastName"
                                placeholder="Ej. Ironside"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="usuario@ejemplo.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Teléfono</label>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="+1 (000) 000-0000"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group half">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group half">
                            <label>Confirmar</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="••••••••"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {error && <div className="status-message error">{error}</div>}
                    {message && <div className="status-message success">{message}</div>}

                    <button type="submit" className="register-button">
                        Registrarse
                    </button>
                </form>

                <div className="register-footer">
                    <p className="footer-text">
                        ¿Ya tienes cuenta?{" "}
                        <span 
                            className="link-text bold" 
                            onClick={() => navigate("/")}
                        >
                            Iniciar Sesión
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;