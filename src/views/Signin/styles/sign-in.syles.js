import styled from 'styled-components';

export const FormButton = styled.button`
  background: rgba(1, 96, 224, 255);
  margin: auto;
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 15px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const FormInput = styled.input`
  border-color: ${(props) => (props.error ? 'red' : '1px solid #ddd')};
`;

export const ASuit = styled.span`
  color: ${(props) => (props.red ? 'darkred' : '#E78201')};
  padding-left: 10px;
`;
