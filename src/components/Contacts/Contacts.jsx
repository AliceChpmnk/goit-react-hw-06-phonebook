import React from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { StyledContacts } from './Contacts.styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';

function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  };

  const visibleContacts = getVisibleContacts();

  return (
        <StyledContacts>
        {visibleContacts.map(({ name, number, id }) => (
            <li key={id}>{name}: {number}
                <button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </li>
        ))}
        </StyledContacts>
  )
}

export default Contacts;