import { useContext } from "react";
import MeetupList from "../components/meeetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
    const favouritesContext = useContext(FavouritesContext);
    let content;

    if(favouritesContext.totalFavourites === 0) {
        content = <p>You have no favourites</p>
    }
    else {
        content = <MeetupList meetups={favouritesContext.favourites}/>
    }
    return(
        <section>
            <h1>My favourites</h1>
            {content}
        </section>
    )
}


export default FavouritesPage;