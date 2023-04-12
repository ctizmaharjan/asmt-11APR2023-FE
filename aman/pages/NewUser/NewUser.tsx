import React, { useState } from 'react';
import style from './NewUserStyled.module.css';
import { userInterface } from './NewUserInterface';
import Link from 'next/link';
import axios from 'axios';

type Props = {};

const nameRegex = /^[a-zA-Z ]*$/;
function NewUser({}: Props) {
  const [user, setUser] = useState<userInterface>({
    userId: '',
    name: '',
    role: '',
  });

  const inputDetails = (
    type: string,
    syntheticevent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUser({
      ...user,
      [type]: syntheticevent.target.value,
    });
  };

  const handleSelectOption = (e: any) => {
    if (e.target.value !== 'Please choose one') {
      inputDetails('role', e);
    }
  };

  const saveUser = () => {
    // axios.post('http')
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.input_container}>
          <div className={style.title}>User Id</div>
          <input
            type='text'
            value={user.userId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputDetails('userId', e);
            }}
          />
        </div>
        <div className={style.input_container}>
          <div className={style.title}>Name</div>
          <input
            type='text'
            value={user.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (nameRegex.test(e.target.value)) inputDetails('name', e);
            }}
          />
        </div>
        <div className={style.input_container}>
          <div className={style.title}>Role</div>
          <select onChange={handleSelectOption}>
            <option>Please choose one</option>
            <option>Admin</option>
            <option>Normal</option>
          </select>
        </div>
        <div className={style.button_group}>
          <button
            className={style.button_element}
            onClick={() => saveUser()}
          >
            Save
          </button>
          <Link href='/Dashboard'>
            <button
              className={style.button_element}
              onClick={() => setUser({ userId: '', name: '', role: '' })}
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
