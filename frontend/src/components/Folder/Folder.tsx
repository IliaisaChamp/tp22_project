import { useNavigate } from 'react-router-dom';
import styles from './Folder.module.css';
import { useCallback } from 'react';

type Props = {
  title: string;
  path: string;
};

export const Folder = (props: Props) => {
  const { title, path } = props;
  const navigate = useNavigate();

  const onNavigate = useCallback(() => {
    navigate(`/${path}`);
  }, [path, navigate]);

  return (
    <a className={styles.folder} onClick={onNavigate}>
      <div className={styles.inner}>
        <svg
          width='295'
          height='200'
          viewBox='0 0 295 200'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='21.5'
            y='1.5'
            width='272'
            height='177'
            fill='#FDFDFD'
            stroke='black'
            strokeWidth='3'
          />
          <rect
            x='11.5'
            y='11.5'
            width='272'
            height='177'
            fill='#FDFDFD'
            stroke='black'
            strokeWidth='3'
          />
          <rect
            x='1.5'
            y='21.5'
            width='272'
            height='177'
            fill='#FDFDFD'
            stroke='black'
            strokeWidth='3'
          />
        </svg>

        <p className={styles.title}>{title}</p>
      </div>
    </a>
  );
};
