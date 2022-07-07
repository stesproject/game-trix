import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  text-shadow: 1px 1px 1px #fff;
  transition: all 0.2s ease-in-out;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  &:hover {
    background-color: #eee;
    border-color: #ccc;
    color: #000;
    text-decoration: none;
  }
`;
