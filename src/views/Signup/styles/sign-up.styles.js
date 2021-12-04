import styled from 'styled-components';

export const ASuit = styled.span`
  color: ${(props) => (props.red ? 'darkred' : 'purple')};
  padding: 0 10px;
`;
export const FormButton = styled.button`
  background: ${(props) => (props.red ? 'darkred' : 'orange')};
  margin: auto;
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 15px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
`;

export const FormInput = styled.input`
  border-color: ${(props) => (props.error ? 'red' : '1px solid #ddd')};
`;
