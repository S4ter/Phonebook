import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/actions';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const emailInput = form.elements.email.value;
    const passwordInput = form.elements.password.value;
    dispatch(
      logInUser({
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
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
