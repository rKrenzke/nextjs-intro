import { useRef } from 'react';

import Card from '../ui/Card';
import styles from './NewExhibitForm.module.css';

function NewExhibitForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const exhibitData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };
    
    props.onAddExhibit(exhibitData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor='title'>Exhibit Title</label>
          <input type='text' id='title' ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='image'>Exhibit Image</label>
          <input type='url'id='image' ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Exhibit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewExhibitForm;
