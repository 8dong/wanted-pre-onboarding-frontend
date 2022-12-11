import React from 'react';
import styled from 'styled-components';

import InputField from '../atoms/InputField';
import LabelText from '../atoms/LabelText';

interface LabeledInputFieldProps {
  labelText: string;
  inputId: string;
  inputType?: string;
  inputValue: string;
  inputPlaceholder: string;
  inputDisabled?: boolean;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledInputField = ({
  labelText,
  inputId,
  inputType,
  inputValue,
  inputPlaceholder,
  handleChangeInput
}: LabeledInputFieldProps) => {
  return (
    <LabeledInputFieldWrapper>
      <div className='labelText'>
        <LabelText htmlFor={inputId}>{labelText}</LabelText>
      </div>
      <InputField
        id={inputId}
        type={inputType}
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={handleChangeInput}
      />
    </LabeledInputFieldWrapper>
  );
};

const LabeledInputFieldWrapper = styled.div`
  display: flex;
  align-items: center;

  .labelText {
    width: 100px;
  }
`;

export default LabeledInputField;
