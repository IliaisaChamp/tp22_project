import { HomeLayout } from '../../components';
import { Button } from '../../components/UI/Button/Button';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <HomeLayout>
      <div className={styles.container}>
        <Button classType={'primary'} className={styles.button}>
          Войти через телеграм
        </Button>
      </div>
    </HomeLayout>
  );
};
