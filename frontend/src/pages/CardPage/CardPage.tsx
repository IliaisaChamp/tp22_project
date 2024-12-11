import { useNavigate, useParams } from 'react-router-dom';
import { HomeLayout } from '../../components';
import { DATABASE } from '../../shared/database';
import { useEffect, useState } from 'react';
import { type CardPathKey } from '../../shared/types';
import styles from './CardPage.module.css';

const ExampleComponent = ({ data }: { data: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState(data);
  const navigateEnd = useNavigate();
  const goMainEnd = () => navigateEnd('/');
  const handleNext = () => {
    if (currentIndex < currentData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0)
    }
  };

  const handleNextOk = () => {
    if (currentIndex < currentData.length) {
      setCurrentData((prevData) => {
        const newData = [...prevData];
        newData.splice(currentIndex, 1);
        return newData;
      });

      setCurrentIndex((prevIndex) => {
        if (currentIndex >= currentData.length - 1) {
          return Math.max(0, currentData.length - 2);
        }
        return prevIndex;
      });
    }
  };


  return currentData.length > 0 ? (
    <div className={styles.card__block}>
      <div className={styles.card}>
        <div className={styles.front}>
          <p className={styles.front__title}>{currentData[currentIndex]?.split('—')[0]?.trim()}</p>
        </div>
        <div className={styles.back}>
          <p className={styles.back__description}>{(currentData[currentIndex]?.split('—')[1]?.trim() || '')}</p>
        </div>
      </div>
      <div className={styles.buttons__block}>
        <button
          className={styles.repeat}
          onClick={handleNext}
        >
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.14214 31.1421L17.2843 17M31.4264 2.85786L17.2843 17M17.2843 17L3.14214 2.85786M17.2843 17L31.4264 31.1421" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>
        <button className={styles.remember}
          onClick={handleNextOk}
        >
          <svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 20L14.3137 31.3137L42.598 3.02944" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>
      </div>
    </div>
  ) : (
    <div className={styles.end__card}>
      <div className={styles.end__block}>
        <div className={styles.end__img}></div>
        <p className={styles.end__text}>Молодец!<br />Продолжай развиваться :-)</p>
      </div>
      <button className={styles.end__button} onClick={goMainEnd}>Выход на главный экран</button>
    </div>
  );
};

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
        {data ? <ExampleComponent data={data} /> : 'Данных нет'}
      </div>
    </HomeLayout>
  );
};