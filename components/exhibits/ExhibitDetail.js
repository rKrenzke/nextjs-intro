import styles from './ExhibitDetail.module.css';

function ExhibitDetail(props) {
  return (
    <section className={styles.detail}>
      <img src="https://www.indianapoliszoo.com/wp-content/uploads/2019/06/Teagan-and-boy-WEB.jpeg" alt="African elephant"/>
      <h1>Zoo Babies</h1>
      <p>Cubs, pups, calves, chicks - no matter what they&apos;re called, baby animals are adorable!</p>
    </section>
  );
}

export default ExhibitDetail;
