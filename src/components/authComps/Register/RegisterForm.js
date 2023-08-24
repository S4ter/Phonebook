import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/actions';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const nameInput = form.elements.name.value;
    const emailInput = form.elements.email.value;
    const passwordInput = form.elements.password.value;
    dispatch(
      registerUser({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      })
    );
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
