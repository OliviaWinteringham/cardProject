import React from 'react';
import css from './App.module.css';
import Emoji from '../Emoji';

function App() {
  return (
    <>
    <div className={css.header}>
      <button className={css.button} id={css.buttonHome}>home</button>
      <button className={css.button} id={css.buttonSkills}>skills</button>
      <button className={css.button} id={css.buttonProjects}>projects</button>
      <button className={css.button} id={css.buttonContact}>contact</button>
    </div>
    <div className={css.textContainer} >
    <h1 className={css.oliviaHeader} id={css.oliviaHeaderHover}> Olivia Winteringham</h1>
    <h2 className={css.oliviaDescription}>junior web developer</h2>
    <p className={css.intro}>graduate of The School of Code </p>
    </div>
    <p className={css.languages}>react | gastby | javaScript | mongodb </p>
    </>
  );
}

export default App;
