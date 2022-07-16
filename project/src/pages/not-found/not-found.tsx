import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <React.Fragment>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Вернуться на главную</Link>
    </React.Fragment>
  );
}

export default NotFoundScreen;
