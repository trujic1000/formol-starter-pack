import React from 'react';
import './App.css';

import 'formol/lib/clean.css';
import Formol, { Field } from 'formol';

function App() {
  const onSubmit = ({ login, password }) => console.log(login, password);
  return (
    <div className="App">
      <h3>Formol Starter Pack</h3>
      <div className="form-container">
        <Formol onSubmit={onSubmit} className="center">
          <Field>Login</Field>
          <Field type="password-strength">Password</Field>
        </Formol>
      </div>
    </div>
  );
}

export default App;
