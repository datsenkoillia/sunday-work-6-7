import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers } from 'redux/users/usersSelectors';
import { delUser } from 'redux/users/usersSlice';

const Home = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log(users);

  return (
    <ul>
      {users.map(({ name, age, status, id }) => (
        <li>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Status: {status}</p>
          <button type='button' onClick={() => dispatch(delUser(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Home;
