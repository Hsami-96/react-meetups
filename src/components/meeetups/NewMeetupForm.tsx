import { useRef } from "react";
import { Item } from "../../interfaces/Item";
import Card from "../ui/Card";
import styles from './NewMeetupForm.module.css'
function NewMeetupForm(props: any) {
    const titleRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);

    const OnSubmitHandler = (event:any) => {
        event.preventDefault();
        const meetupData: Item = {
            id: "",
            title: titleRef.current?.value,
            address: addressRef.current?.value,
            image: imageRef.current?.value,
            description: descRef.current?.value
        }
        props.onAddMeetup(meetupData);
    }   
    return(
        <Card>
            <form className={styles.form} action="" onSubmit={OnSubmitHandler}>
                <div className={styles.control}>
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" required id="title" ref={titleRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input type="url" required id="image" ref={imageRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="address">Meetup address</label>
                    <input type="text" required id="title" ref={addressRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">Meetup description</label>
                    <textarea id="description" required rows={5} ref={descRef}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;