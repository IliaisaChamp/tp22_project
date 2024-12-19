import styles from './Loader.module.css';

export const LoadingElement = () => {
    return (
        <div className={styles.element}>
            <div className={styles.loading}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        </div>
    );
};
