import Banner from '../components/Banner';
import Housings from '../layouts/Housings';

/**
le composant Home représente la page d'accueil, 
affichant une bannière avec un titre et un style spécifiques via le composant Banner.
et le composant Housings pour afficher une mise en page contenant des informations sur les logements.
 */
const Home = () => {
  return (
    <main className='home'>
      <Banner title={'Chez vous, partout et ailleurs'} page={'home'} />
      <Housings />
    </main>
  );
};

export default Home;
