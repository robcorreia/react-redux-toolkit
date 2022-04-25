import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice'

const User = () => {
  //const state = useSelector(state => state);
  const { name } = useSelector(selectUser);

  return (
    <div>
      <h1>Usuário: {name}</h1>
    </div>
  );
}

export default User;
