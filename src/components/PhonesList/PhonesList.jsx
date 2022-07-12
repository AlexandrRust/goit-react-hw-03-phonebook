import { List } from './PhonesList.styled';
import { PropTypes } from 'prop-types';
import { Item } from './Item/Item.styled';
import { SecondaryButton } from 'components/Buttons/SecondaryButton.styled';

export const PhonesList = ({ options, deleteContact }) => {
  return (
    <List>
      {options.map(({ name, id, number }) => (
        <Item key={id}>
          {name}: {number}{' '}
          <SecondaryButton
            type="button"
            name={name}
            onClick={() => deleteContact(id)}
          >
            delete
          </SecondaryButton>
        </Item>
      ))}
    </List>
  );
};

PhonesList.propTypes = {
  options: PropTypes.array,
};
