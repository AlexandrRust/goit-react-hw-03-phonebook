import { List } from "./PhonesList.styled";
import { PropTypes } from "prop-types";
import { Item } from "./Item/item.styled"; 
import { ContactBtn } from "components/Btn/ContactBtn.styled";


export const FhonesList = ({ options, deleteContact}) => {
    return (
        <List>
            {options.map(({ name, id, number }) => <Item key={id}>{name}: {number} <ContactBtn type="button" name={name} onClick={() => deleteContact(id )}>delete</ContactBtn></Item>)}
        </List>
    )
}


FhonesList.propTypes = {
    options: PropTypes.array
}