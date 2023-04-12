import React, { useState } from 'react';
import style from './LoginStyled.module.css';
import { userDetailsType, userDetailsErrorType } from './LoginInterface';
type Props = {};

function Login({}: Props) {
  const [userDetails, setUserDetails] = useState<userDetailsType>({
    userId: '',
    password: '',
  });
  const [userDetailsError, setUserDetailsError] =
    useState<userDetailsErrorType>({
      userId: false,
      password: false,
    });

  const inputDetails = (
    type: string,
    syntheticevent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserDetails({
      ...userDetails,
      [type]: syntheticevent.target.value,
    });
    if (syntheticevent.target.value) {
      setUserDetailsError({
        ...userDetailsError,
        [type]: false,
      });
    }
  };

  //after login use the context api and store the token and pass the role in form of the params

  const onLogin = () => {
    if (userDetails.userId && userDetails.password) {
      alert('required filled filled up');
    }
    setUserDetailsError({
      userId: !userDetails.userId,
      password: !userDetails.password,
    });
  };
  return (
    <div className={style.wrapper}>
      <div className={style.login_container}>
        <div className={style.input_container}>
          <span className={style.title}>User Id</span>
          <input
            type='text'
            value={userDetails.userId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputDetails('userId', e);
            }}
          />
          {userDetailsError.userId && (
            <span className={style.errorMessage}>This Field is required</span>
          )}
        </div>
        <div className={style.input_container}>
          <span className={style.title}>Password</span>
          <input
            type='password'
            value={userDetails.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputDetails('password', e);
            }}
          />
          {userDetailsError.password && (
            <span className={style.errorMessage}>This Field is required</span>
          )}
        </div>

        <div className={style.button_section}>
          <button
            className={style.login_button}
            onClick={() => onLogin()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
