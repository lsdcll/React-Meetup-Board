import { useRef } from 'react';
import Card from "../ui/Card";
import styles from './NewMeetupForm.module.css'
function NewMeetupForm(props)
{
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addrInputRef = useRef();
    const descInputRef = useRef();


    function submitHandler(ev) {
        ev.preventDefault();
        
        const meetupData = {
          title: titleInputRef.current.value,
          image: imageInputRef.current.value,
          address: addrInputRef.current.value,
          description: descInputRef.current.value,
        };

        console.log(meetupData);
        props.onAddMeetup(meetupData);
    }

    return (
      <Card>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="img">Image</label>
            <input type="url" required id="img" ref={imageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="addr">Address</label>
            <input type="text" required id="addr" ref={addrInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="desc">Description</label>
            <textarea rows="5" required id="desc" ref={descInputRef} />
          </div>
          <div className={styles.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    );

}
export default NewMeetupForm;