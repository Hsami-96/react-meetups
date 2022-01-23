import NewMeetupForm from "../components/meeetups/NewMeetupForm";
import { Item } from "../interfaces/Item";
import {useNavigate} from 'react-router-dom'
function NewMeetupsPage() {
    const navigate = useNavigate();
    const addMeetupHandler = (newMeetupData: Item) => {
        fetch(
            'https://react-meetups-66672-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(newMeetupData),
                headers: {
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true})
        });

    }
    return(
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    )
}


export default NewMeetupsPage;