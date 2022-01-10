import styled from 'styled-components';

const Status = styled.p`
  color: ${(props) => (props.status !== 1 ? 'red' : 'teal')};
`;

export default Status;
