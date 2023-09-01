import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from 'redux/auth/actions';
import './LoginForm.styles.css';
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
  const user = useSelector(state => {
    return state.auth.user;
  });

  if (user.name !== null) {
    return <div className="notlogged_info">You are already logged in.</div>;
  } else {
    return (
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="login_container"
      >
        <label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="login_input"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login_input"
          />
        </label>
        <button type="submit" className="login_button">
          Log in
        </button>
      </form>
    );
  }
};
