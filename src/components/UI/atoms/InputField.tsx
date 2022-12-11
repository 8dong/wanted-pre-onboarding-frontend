import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  id: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ id, type, value, placeholder, onChange }: InputFieldProps) => {
  return (
    <InputFieldwrapper
      id={id}
      type={type ?? 'text'}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const InputFieldwrapper = styled.input`
  width: 100%;
  padding: 10px 20px;

  border-radius: 10px;
  border: 1px solid #d4d4d4;
  outline: none;

  transition: box-shadow 200ms ease-in-out;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px 4px;
  }
`;

export default InputField;
