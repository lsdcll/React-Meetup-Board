import { useContext } from 'react'; 
import styles from './MeetupItem.module.css'
import Card from '../ui/Card.js'
import FavouritesContext from '../../store/favourites-context';

function MeetupItem(props) { 
    const favCtxObj = useContext(FavouritesContext);
    function toggleFavouriteHandler(){
        if (favCtxObj.isFavourite(props.id)) {
            favCtxObj.removeFavourite(props.id);
        }
        else {
            favCtxObj.addFavourite({...props})
    }
    }

    return (
      <li className={styles.item}>
        <Card>
          <div className={styles.image}>
            <img src={props.image} />
          </div>
          <div className={styles.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={styles.actions}>
                    <button onClick={toggleFavouriteHandler}>{favCtxObj.isFavourite(props.id) ? "Unfavourite" : "Favourite" }</button>
          </div>
        </Card>
      </li>
    );
}

export default MeetupItem;