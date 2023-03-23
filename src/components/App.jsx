import { GlobalStyle } from 'components/GlobalStyle';
import React from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { StyledForm } from './Form/Form.styled';

function App() {

  return (
    <div>
        <StyledForm>
        <h1>Phonebook</h1>
          <Form />
        </StyledForm>
        <h1>Contacts</h1>
        <Filter />
        <Contacts />
      <GlobalStyle />
    </div>
  )
}

export default App;