import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export function ProtectedRoute({ children, ...rest }) {

  const { user } = useSelector(store =>
    store.register);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email !== '' && user.name !== '' ? (
          children
        ) : (
          // Если пользователя нет в хранилище, происходит переадресация на роут /login
          <Redirect
            to={{
              // Маршрут, на который произойдёт переадресация
              pathname: '/login',
              // В from сохраним текущий маршрут
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
