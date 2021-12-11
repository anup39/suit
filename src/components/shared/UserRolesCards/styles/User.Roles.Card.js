import styled from 'styled-components';

const Status = styled.p`
  color: ${(props) => (props.status === 'Inactive' ? 'red' : 'teal')};
`;

export default Status;
