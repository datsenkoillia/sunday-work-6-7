import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { addUser } from 'redux/users/usersSlice';
import { useDispatch } from 'react-redux';

const AddUserPage = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');


  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else {
      setAge(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      age,
      status: 'offline',
      id: nanoid(),
    };
    dispatch(addUser(newUser));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Age
        <input type="text" name="age" value={age} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default AddUserPage;
