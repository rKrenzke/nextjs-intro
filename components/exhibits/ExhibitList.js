import ExhibitItem from './ExhibitItem';
import styles from './ExhibitList.module.css';

function ExhibitList(props) {
  return (
    <ul className={styles.list}>
      {props.exhibits.map((exhibit) => (
        <ExhibitItem
          key={exhibit.id}
          id={exhibit.id}
          image={exhibit.image}
          title={exhibit.title}
          description={exhibit.description}
        />
      ))}
    </ul>
  );
}

export default ExhibitList;
