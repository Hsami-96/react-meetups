import { Item } from '../../interfaces/Item';
import MeetupItem from './MeetupItem';
import styles from './MeetupList.module.css';

function MeetupList(props: any) {
    return(
        <ul className={styles.list}>
            {props.meetups.map((meetup: Item) => (
                <MeetupItem 
                    key={meetup.id} 
                    id ={meetup.id}
                    title={meetup.title} 
                    address={meetup.address} 
                    image={meetup.image} 
                    description={meetup.description} />
            ))}
        </ul>
    )
}

export default MeetupList;