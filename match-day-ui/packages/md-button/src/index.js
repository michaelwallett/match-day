import styled from 'styled-components';
import colours from 'md-colours';

const Button = styled.button`
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${(props) => props.primary ? colours.primary : colours.secondary};
  color: ${(props) => props.primary ? 'white' : colours.primary};
`;

export default Button;
