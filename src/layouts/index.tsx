import { Outlet } from 'umi';
import Home from '../pages/Home/index';
import styles from './index.less';
import { isMobileDevice } from "@/utils";
import Mobile from '@/pages/Mobile';
export default function Layout() {
  return (
    <div className={styles.layout}>
      {
        isMobileDevice() ? <Mobile /> : <Home></Home>
      }
    </div>
  );
}
