import { useRouter } from 'next/dist/client/router';

import Card from '../ui/Card';
import styles from './ExhibitItem.module.css';

function ExhibitItem(props) {
  const router = useRouter();

  function showDetailsHandler(){
    router.push('/' + props.id); //equivalent of using a Link
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ExhibitItem;
