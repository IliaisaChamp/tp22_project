import { useNavigate, useParams } from 'react-router-dom';
import { HomeLayout, ExampleComponent, LoadingElement } from '../../components';
import { DATABASE } from '../../shared/database';
import { useEffect, useState } from 'react';
import { type CardPathKey } from '../../shared/types';
import styles from './CardPage.module.css';

export const CardPage = () => {
  const { key } = useParams();
  const [data, setData] = useState<string[] | undefined>();;
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
        {data ? <ExampleComponent data={data} /> :
          <LoadingElement/>
        }
      </div>
    </HomeLayout>
  );
};