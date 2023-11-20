import Home from '../pages/Home/index';
import styles from './index.less';
export default function Layout() {
  return (
    <div className={styles.layout}>
      <Home></Home>
    </div>
  );
}
