/* eslint-disable react/prop-types */
import PsychoCardList from '../components/PsychoCardList/PsychoCardList';
import Wrapper from '../components/Shared/Wrapper/Wrapper';

const Psychologists = ({ openModal, closeModal }) => {
  return (
    <Wrapper>
      <PsychoCardList openModal={openModal} closeModal={closeModal} />
    </Wrapper>
  );
};

export default Psychologists;
