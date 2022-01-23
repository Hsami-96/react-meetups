import { useContext } from 'react';
import { Item } from '../../interfaces/Item';
import FavouritesContext from '../../store/favourites-context';
import Card from '../ui/Card';
import styles from './MeetupItem.module.css';


function MeetupItem(props: Item) {
  const favouritesContext = useContext(FavouritesContext);
  const itemIsFavourite = favouritesContext.itemIsFavourite(props.id);

  const toggleFavouritesStatusHandler = () => {
    if(itemIsFavourite) {
      favouritesContext.removeFavourite(props.id)
    }
    else {
      favouritesContext.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image
      })
    }
  }
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
            <button onClick={toggleFavouritesStatusHandler}>{itemIsFavourite ? 'Remove from favourites': 'Add to favourites'}</button>
          </div>
        </li>
      </Card>
    );
}

export default MeetupItem;