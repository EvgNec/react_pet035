import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
        <div className={css.Loader}>
          <Oval height={60} width={60} color="#3f51b5" visible={true} />
        </div>
  );
}