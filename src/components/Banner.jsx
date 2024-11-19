import PropTypes from 'prop-types';

/**
 *PropTypes: pour valider les types des propriétés title (chaîne optionnelle) et page (chaîne requise).
 Le composant: retourne une balise <section> contenant un <h1> conditionnellement rendu si title est fourni,
  et il est exporté pour être utilisé ailleurs.
 
 */
const Banner = ({ title, page }) => {
  return (
    <section className={`banner banner--${page}`}>
      {title && <h1 className='banner__title'>{title}</h1>}
    </section>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string.isRequired,
};
export default Banner;

