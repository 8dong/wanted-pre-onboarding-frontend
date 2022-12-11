import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../atoms/Button';
import LogoText from '../atoms/LogoText';

import authSlice from '../../redux/slice/authSlice';

import type { RootState } from '../../redux/store/store';

const HeaderSection = () => {
  const isAuthorized = useSelector((store: RootState) => store.auth);

  const dispatch = useDispatch();

  const handleClickLogoutButton = () => {
    dispatch(authSlice.actions.logout());
  };

  return (
    <HeaderSectionWrapper>
      <div className='logoText'>
        <LogoText logoText='wanted-pre-onboarding' />
      </div>
      {isAuthorized && (
        <div className='logoutButton'>
          <Button bgColor='#e74c3c' onClick={handleClickLogoutButton}>
            Logout
          </Button>
        </div>
      )}
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
