import Banner from '../components/Banner';
import { aboutUsList } from '../assets/datas/aboutUsList';
import Collapse from '../components/Collapse';

/**
 Je utilise une liste de données (aboutUsList) pour générer dynamiquement
  des sections extensibles (Collapse) contenant un titre et du contenu.
 */
const AboutUs = () => {
  return (
    <main className='about-us'>
      <Banner page={'about-us'} />
      <section className='collapses'>
        {aboutUsList.map((item, index) => (
          <Collapse title={item.title} textContent={item.content} key={index} />
        ))}
      </section>
    </main>
  );
};

export default AboutUs;
