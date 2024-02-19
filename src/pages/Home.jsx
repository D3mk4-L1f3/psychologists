/* eslint-disable react/prop-types */
import Hero from '../components/Hero/Hero';

const Home = ({ openModal, closeModal }) => {
  return <Hero openModal={openModal} closeModal={closeModal} />;
};

export default Home;
