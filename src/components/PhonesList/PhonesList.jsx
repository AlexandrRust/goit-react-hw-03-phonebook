import { List } from './PhonesList.styled';
import { PropTypes } from 'prop-types';
import { ItemLi } from './Item/ItemLi.styled';
import { SecondaryButton } from 'components/buttons/SecondaryButton.styled';

export const PhonesList = ({ options, deleteContact }) => {
  return (
    <List>
      {options.map(({ name, id, number }) => (
        <ItemLi key={id}>
          {name}: {number}{' '}
          <SecondaryButton
            type="button"
            name={name}
            onClick={() => deleteContact(id)}
          >
            delete
          </SecondaryButton>
        </ItemLi>
      ))}
    </List>
  );
};

PhonesList.propTypes = {
  options: PropTypes.array,
};
