import React from 'react';
import style from './DashboardStyled.module.css';
import Link from 'next/link';
type Props = {};

function Dashboard({}: Props) {
  return (
    <div className={style.wrapper}>
      <span>Welcom role user</span>
      <Link href='/NewUser'>
        <button>Add New User</button>
      </Link>
      <div className={style.user_list_wrapper}>
        <span>Aman</span>
        <span>Aman</span>
        <span>Aman</span>
        <span>Aman</span>
        <span>Aman</span>
        <span>Aman</span>
        <span>Aman</span>
        <span>Aman</span>
      </div>
    </div>
  );
}

export default Dashboard;
