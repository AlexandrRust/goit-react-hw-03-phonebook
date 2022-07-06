import { Title } from "components/Title/Title.styled";
import PropTypes from 'prop-types';

export const FhoneBookTitle = ({ text }) => {
    return <Title>{text}</Title>
}

FhoneBookTitle.propTypes = {
    text: PropTypes.string.isRequired
}