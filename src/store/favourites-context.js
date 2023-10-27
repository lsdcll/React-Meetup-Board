import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (meetup) => { },
    removeFavourite: (meetupId) => { },
    isFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([])

    function addFavouriteHandler(meetup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(meetup);
        });
     }
    function removeFavouriteHandler(meetupId) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
     }
    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
     }
    
    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        isFavourite: itemIsFavouriteHandler
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}
export default FavouritesContext;