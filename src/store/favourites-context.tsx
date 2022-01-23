import { createContext, useState } from "react";
import { Item } from "../interfaces/Item";

const FavouritesContext = createContext({
    favourites: [] as Item[],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup: Item) => {},
    removeFavourite: (meetupId: string | undefined) => {},
    itemIsFavourite: (meetupId: string |  undefined) : boolean => {return false},
});

export function FavouritesContextProvider(props: any) {
    const [userFavourites, setUserFavourites] = useState<Item[]>([]);
    
    const addFavouritesHandler = (favouriteMeetup: Item) => {
        setUserFavourites((prevUserFavourites: Item[]) => {
            return prevUserFavourites.concat(favouriteMeetup);
        })
    }

    const removeFavouritesHandler = (meetupId: string | undefined) => {
        setUserFavourites((prevUserFavourites: Item[]) => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId)
        })
    }

    const itemIsFavouritesHandler = (meetupId: string| undefined ): boolean => {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context ={
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouritesHandler,
        removeFavourite: removeFavouritesHandler,
        itemIsFavourite: itemIsFavouritesHandler
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;