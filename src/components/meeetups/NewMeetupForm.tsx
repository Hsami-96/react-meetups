import Card from "../ui/Card";
import styles from './NewMeetupForm.module.css'
function NewMeetupForm() {
    return(
        <Card>
            <form className={styles.form} action="">
                <div className={styles.control}>
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" required id="title" />
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input type="url" required id="image" />
                </div>
                <div className={styles.control}>
                    <label htmlFor="address">Meetup address</label>
                    <input type="text" required id="title" />
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">Meetup description</label>
                    <textarea id="description" required rows={5}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;