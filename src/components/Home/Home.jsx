import React from 'react';
import s from './Home.module.css';

export const Home = () => {
  return (
    <div className={s.containerHome}>
      <p className={s.labelHome}>Welcome to your phonebook!</p>
    </div>
  );
};
