import styled from 'styled-components';

const LabelText = ({ children, htmlFor }: { children: string; htmlFor: string }) => {
  return <LabelTextWrapper htmlFor={htmlFor}>{children}</LabelTextWrapper>;
};

const LabelTextWrapper = styled.label``;

export default LabelText;
