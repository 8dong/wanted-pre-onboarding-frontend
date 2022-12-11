import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoText = ({ logoText }: { logoText: string }) => {
  return (
    <LogoTextWrapper>
      <Link to={'/'}>{logoText}</Link>
    </LogoTextWrapper>
  );
};

const LogoTextWrapper = styled.h1`
  display: flex;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px 20px;

    font-size: 25px;
    font-weight: 700;
  }
`;

export default LogoText;
