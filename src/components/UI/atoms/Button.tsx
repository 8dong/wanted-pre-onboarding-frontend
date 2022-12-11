import styled from 'styled-components';

interface ButtonProps {
  children: string;
  bgColor: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ children, bgColor, type, disabled, onClick }: ButtonProps) => {
  const handleClickButton = () => {
    onClick();
  };

  return (
    <ButtonWrapper
      onClick={handleClickButton}
      type={type ?? 'button'}
      disabled={disabled ?? false}
      bgColor={bgColor}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 50px;

  border: none;
  border-radius: 8px;

  background-color: ${(props) => `${props.bgColor}ba`};

  font-weight: 700;
  color: #fff;

  transition: background-color 200ms ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => `${props.bgColor}`};
  }

  &:disabled {
    background-color: ${(props) => `${props.bgColor}ba`};

    cursor: not-allowed;
  }
`;

export default Button;
