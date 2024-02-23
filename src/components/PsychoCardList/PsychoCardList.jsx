/* eslint-disable react/prop-types */
import PsychoCard from './PsychoCard/PsychoCard';
import psychologists from '../../helpers/psychologists.json';
import { ListStyled } from './PsychoCardList.styled';

const PsychoCardList = ({ openModal, closeModal }) => {
  return (
    <ListStyled>
      {psychologists?.map((psychologist, index) => (
        <PsychoCard
          key={index}
          psychologist={psychologist}
          openModal={openModal}
          closeModal={closeModal}
        />
      ))}
    </ListStyled>
  );
};

export default PsychoCardList;
