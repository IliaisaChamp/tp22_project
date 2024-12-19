import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './card.module.css'
import { Button } from '../UI/Button/Button';

export const ExampleComponent = ({ data }: { data: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState(data);
  const navigateEnd = useNavigate();
  const goMainEnd = () => navigateEnd('/');

  function resetCardRotation() {
    const checkbox = document.querySelector("#checkbox") as HTMLInputElement;
    const card = document.querySelector("#divCard") as HTMLDivElement;

    if (checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    }

    if (card) {
        card.style.transform = "rotateX(0deg)";
        card.style.transition = "transform 0s ease-in-out";
    }
  }

  const returnMapRotation = () => {
    const checkbox = document.querySelector("#checkbox") as HTMLInputElement;
    const card = document.querySelector("#divCard") as HTMLDivElement;

    if (checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    }

    if (card) {
        card.style.transform = "rotateX(180deg)";
        card.style.transition = "transform 0.6s ease-in-out";
    }
  }


  const handleNext = () => {
    if (currentIndex < currentData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0)
    }
    resetCardRotation();
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
    resetCardRotation();
  };


  return currentData.length > 0 ? (
    <div className={styles.card__block}>

      <label>
        <input type="checkbox" id="checkbox" onClick={returnMapRotation}/>
        <div className={styles.card} id="divCard">
          <div className={styles.front}>{currentData[currentIndex]?.split('—')[0]?.trim()}</div>
          <div className={styles.back}>{(currentData[currentIndex]?.split('—')[1]?.trim() || '')}</div>
        </div>
      </label>

      <div className={styles.buttons__block}>
        <Button
          classType={'danger'}
          className={styles.repeat}
          onClick={handleNext}
        >
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.14214 31.1421L17.2843 17M31.4264 2.85786L17.2843 17M17.2843 17L3.14214 2.85786M17.2843 17L31.4264 31.1421" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </Button>
        <Button
          classType={'success'}
          className={styles.remember}
          onClick={handleNextOk}
        >
          <svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 20L14.3137 31.3137L42.598 3.02944" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </div>
    </div >
  ) : (
    <div className={styles.end__card}>
      <div className={styles.end__block}>
        <div className={styles.end__img}></div>
        <p className={styles.end__text}>Молодец!<br />Продолжай развиваться :-)</p>
      </div>
      <Button
        classType={'primary'}
        className={styles.end__button}
        onClick={goMainEnd}
      >
        Выход на главный экран
      </Button>
    </div>
  );
};