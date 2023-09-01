import { useDispatch, useSelector } from 'react-redux';
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
            type="text"
            name="name"
            placeholder="Username"
            className="login_input"
          />
        </label>
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
          Register
        </button>
      </form>
    );
  }
};
