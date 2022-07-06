import { Component } from "react";
import { Form, BtnForm } from "./PhoneBookForm.styled";
import { Label } from "components/Label/Label.styled";
import { Input } from "components/Input/Input.styled";


export class PhoneBookForm extends Component {

    state = {
        name: '',
        number: ''
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
    }

    render() {
        return (
                <Form  onSubmit={this.handleSubmit}>
                <Label htmlFor="name">
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </Label>
                <Label htmlFor="name">
                    Phone
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </Label>
                    <BtnForm type="submit">Add Contact</BtnForm>
                </Form>
        )
    }
}