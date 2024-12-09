import { Folder, HomeLayout } from '../../components';
import styles from './MainPage.module.css';
import { CardPathKey } from '../../shared/types';

export const MainPage = () => {
  return (
    <HomeLayout>
      <div className={styles.container}>
        <Folder title='Продакт-менеджер' path={CardPathKey.PRODUCT_MANAGER} />
        <Folder title='Аналитик' path={CardPathKey.ANALYST} />
        <Folder title='UX/UI-дизайнер' path={CardPathKey.DESIGNER} />
        <Folder title='Frontend-разработчик' path={CardPathKey.FRONTEND} />
        <Folder title='Backend-разработчик' path={CardPathKey.BACKEND} />
        <Folder title='DevOps-инженер' path={CardPathKey.DEVOPS} />
      </div>
    </HomeLayout>
  );
};
