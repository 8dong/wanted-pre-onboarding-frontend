import styled from 'styled-components';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LabeledInput from '../molecules/LabeledInput';
import Button from '../atoms/Button';

import authSlice from '../../../redux/slice/authSlice';

const LoginForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup' | 'none'>('none');

  const formIsValid = emailValue.includes('@') && passwordValue.trim().length >= 8;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChangeEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleChangePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleClickSignInButton = () => {
    setAuthType('signin');
  };

  const handleClickSignUpButton = () => {
    setAuthType('signup');
  };

  const handleSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formIsValid) return;

    setIsLoading(true);
  };

  const authRequest = useCallback(
    async (email: string, password: string, type: string) => {
      try {
        const response = await fetch(`https://pre-onboarding-selection-task.shop/auth/${type}`, {
          method: 'POST',
          body: JSON.stringify({
            email,
            password
          }),
          headers: {
            'Content-type': 'application/json'
          }
        });

        const body = await response.json();

        if (!response.ok) throw new Error(body.message);

        dispatch(authSlice.actions.login(body.access_token));

        navigate('/todo');
      } catch (err) {
        window.alert((err as Error).message);
      } finally {
        setIsLoading(false);
        setAuthType('none');
        setEmailValue('');
        setPasswordValue('');
      }
    },
    [navigate, dispatch]
  );

  useEffect(() => {
    if (!isLoading) return;

    authRequest(emailValue, passwordValue, authType);
  }, [emailValue, passwordValue, authType, isLoading, authRequest]);

  return (
    <LoginFormWrapper onSubmit={handleSubmitHandler} noValidate autoComplete='off'>
      <div className='inputGroup'>
        <div className='emailInput'>
          <LabeledInput
            labelText='Email'
            inputValue={emailValue}
            inputId='EmailInput'
            inputType='email'
            inputPlaceholder='Email을 작성해주세요'
            handleChangeInput={handleChangeEmailInput}
          />
        </div>
        <div className='passwordInput'>
          <LabeledInput
            labelText='Password'
            inputValue={passwordValue}
            inputId='PasswordInput'
            inputType='password'
            inputPlaceholder='Password를 작성해주세요'
            handleChangeInput={handleChangePasswordInput}
          />
        </div>
      </div>
      <div className='buttonGroup'>
        <Button
          bgColor='#38761d'
          type='submit'
          onClick={handleClickSignUpButton}
          disabled={!formIsValid}
        >
          Sign Up
        </Button>
        <Button
          bgColor='#0066ff'
          type='submit'
          onClick={handleClickSignInButton}
          disabled={!formIsValid}
        >
          Sign In
        </Button>
      </div>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 400px;
  padding: 20px;
  margin: 0 20px;

  border: 1px solid #e4e4e4;
  border-radius: 20px;

  .inputGroup {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }

  .emailInput {
    width: 100%;
    margin-bottom: 10px;
  }

  .buttonGroup {
    align-self: flex-end;

    display: flex;
  }

  .buttonGroup button {
    margin: 10px;
  }
`;

export default LoginForm;
