import { type ReactNode } from 'react';
import { Navbar } from '../../Navbar/Navbar';
import styles from './HomeLayout.module.css';

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className={styles.main}>{children}</main>
    </>
  );
};
