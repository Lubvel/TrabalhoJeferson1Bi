import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticação com email e senha
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const handleGoogleLogin = () => {
    // Adicione a lógica para login com Google
    console.log('Login com Google');
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <p>Faça login com sua conta Google ou email e senha.</p>

      {/* Formulário de login com email e senha */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Entrar
        </button>
      </form>

      {/* Botão para login com Google */}
      <button onClick={handleGoogleLogin} style={styles.googleButton}>
        Entrar com Google
      </button>
    </div>
  );
};

// Estilos inline simples
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    textAlign: 'center' as 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    textAlign: 'left' as 'left',
    gap: '5px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  googleButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Login;
