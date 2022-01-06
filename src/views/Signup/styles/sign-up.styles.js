import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ASuit = styled.span`
  color: ${(props) => (props.red ? 'darkred' : '#E78201')};
  padding-left: 10px;
`;

export const FormButton = styled.button`
  background: #e78201;
  margin: auto;
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 15px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
`;

export const FormInput = styled.input`
  border-color: ${(props) => (props.error ? 'red' : '1px solid #ddd')};
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #698aff;
  cursor: Pointer;
`;
