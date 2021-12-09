import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

const RegisterPage = () => {

  const { name, email, password, confirmPassword, handleChange, isValidEmail, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          className="has-error"
        />

        {
          name.trim().length <= 0 &&
          <span>Este campo es necesario</span>
        }

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />

        {
          !isValidEmail(email) &&
          <span>El email no es vaido</span>
        }

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        {
          password.trim().length <= 0 &&
          <span>Este campo es necesario</span>
        }

        <input
          type="password"
          placeholder="Repeat Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        {
          confirmPassword.trim().length <= 0 &&
          <span>Este campo es necesario</span>
        }

        <button type="submit">Create</button>
        <button onClick={resetForm} >Reset</button>

      </form>
    </div>
  )
}

export default RegisterPage
