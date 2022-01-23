import { Item } from '../../interfaces/Item';
import Card from '../ui/Card';
import styles from './MeetupItem.module.css';


function MeetupItem(props: Item) {
    return (
      <Card>
        <li className={styles.item}>
          <div className={styles.image}>
            <img src={props.image} alt="" />
          </div>
          <div className={styles.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={styles.actions}>
            <button>Add to favourites</button>
          </div>
        </li>
      </Card>
    );
}

export default MeetupItem;