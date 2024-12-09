import { useNavigate, useParams } from 'react-router-dom';
import { HomeLayout } from '../../components';
import { DATABASE } from '../../shared/database';
import { useEffect, useState } from 'react';
import { type CardPathKey } from '../../shared/types';

import styles from './CardPage.module.css';

export const CardPage = () => {
  const { key } = useParams();
  const [data, setData] = useState<string[]>();
  const navigate = useNavigate();
  const goMain = () => navigate('/');

  useEffect(() => {
    if (key) {
      setData(DATABASE[key as CardPathKey]);
    }
  }, [key]);

  return (
    <HomeLayout>
      <div className={styles.inner}>
        <button className={styles.back_button} onClick={goMain}>
          <div className={styles.image}></div>
        </button>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {data
            ? data?.map((info: string, idx: number) => <p key={idx}>{info}</p>)
            : 'Page not found'}
        </div>
      </div>
    </HomeLayout>
  );
};
