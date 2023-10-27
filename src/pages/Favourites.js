import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
    const favCtxObj = useContext(FavouritesContext);
    let content = {};

    if (favCtxObj.totalFavourites === 0) {
        content = <p>No favourites to display... try adding some favourites!</p>;
    } else {
        content = <MeetupList meetups={favCtxObj.favourites} />;
    }
    return <section><h1>All Favourites</h1>{content}</section>;
}

export default FavouritesPage;
