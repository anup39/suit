import styled from 'styled-components';

export const FormButton = styled.button`
  background: blue;
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
