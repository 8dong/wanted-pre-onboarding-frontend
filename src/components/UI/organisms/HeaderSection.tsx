import styled from 'styled-components';

import Button from '../atoms/Button';
import LogoText from '../atoms/LogoText';

const HeaderSection = () => {
  return (
    <HeaderSectionWrapper>
      <div className='logoText'>
        <LogoText logoText='wanted-pre-onboarding' />
      </div>
      <div className='logoutButton'>
        <Button bgColor='#e74c3c' onClick={() => {}}>
          Logout
        </Button>
      </div>
    </HeaderSectionWrapper>
  );
};

const HeaderSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e4e4e4;

  background-color: #fff;

  .logoText {
    margin: 0 auto;
  }

  .logoutButton {
    margin: 10px;
  }
`;

export default HeaderSection;
