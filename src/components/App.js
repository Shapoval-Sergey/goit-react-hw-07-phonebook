import React from "react";
import { CSSTransition } from "react-transition-group";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.box}>
      <CSSTransition
        in={true}
        appear
        timeout={1000}
        classNames={s}
        unmountOnExit
      >
        <h1 className={s.title}>Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <CSSTransition
        in={true}
        timeout={250}
        classNames={s.filter}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      
      <ContactList />
    </div>
  );
}
