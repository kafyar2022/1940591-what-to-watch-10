import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-action';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const isPasswordValid = (): boolean => {
    const { password } = formData;

    if (password.search(/[a-z]/i) < 0) {
      setError('Your password must contain at least one letter.');
      return false;
    }
    if (password.search(/[0-9]/) < 0) {
      setError('Your password must contain at least one digit.');
      return false;
    }
    return true;
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.email && isPasswordValid()) {
      dispatch(loginAction(formData));
    }
  };


  return (
    <form className="sign-in__form" onSubmit={formSubmitHandler}>
      {
        error &&
        <div className="sign-in__message">
          <p>{error}</p>
        </div>
      }
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            value={formData.email}
            onChange={(evt) => setFormData({ ...formData, email: evt.target.value })}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            value={formData.password}
            onChange={(evt) => setFormData({ ...formData, password: evt.target.value })}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
