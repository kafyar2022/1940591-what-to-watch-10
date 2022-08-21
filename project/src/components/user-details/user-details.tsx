import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { getUser } from '../../services/user';
import { logoutAction } from '../../store/api-action';
import { IsAuthorized } from '../../util';

function UserDetails(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = getUser();

  return (
    !IsAuthorized()
      ?
      <div className="user-block">
        <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>
      </div>
      :
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={user.avatarUrl} alt={user.name} width={63} height={63} />
          </div>
        </li>

        <li className="user-block__item">
          <Link
            className="user-block__link"
            to="/"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
  );
}

export default UserDetails;
