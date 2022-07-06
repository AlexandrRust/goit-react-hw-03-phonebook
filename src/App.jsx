import { nanoid } from 'nanoid'

import { Component } from "react";
import { PhoneBookForm } from "components/PhoneBookForm/PhoneBookForm";
import { Section } from "components/Section/Section.styled";
import { Box } from 'components/Box/Box.styled';
import { FhoneBookTitle } from "components/Title/Title";
import { FhonesList } from "components/PhonesList/PhonesList";
import { Filter } from 'components/Filter/Filter';



export class App extends Component {
  
  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  

  formSubmitHandler = ({ name, number}) => {
    
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    
    

    this.state.contacts.find(elem => elem.name.toLowerCase() === name.toLowerCase()) ? alert(`${name} is already in contacts.`) :
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(elem => elem.id !== id),
    }));
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }


  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter))
  }
  
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts()
    
    return (
      <Section>
        <FhoneBookTitle text={"Phonebook"}></FhoneBookTitle>
        <Box>
          <PhoneBookForm onSubmit={this.formSubmitHandler} />
        </Box>
        <FhoneBookTitle text={"Contacts"}></FhoneBookTitle>
        <Box>
          <Filter value={filter} onChange={this.changeFilter} />
          <FhonesList options={visibleContacts} deleteContact={this.deleteContact} />
        </Box>
      </Section>
    )
    };
};
