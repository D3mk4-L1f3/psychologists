/* eslint-disable react/prop-types */
import PsychoCard from './PsychoCard/PsychoCard';
import { ListStyled } from './PsychoCardList.styled';
import { useSelector } from 'react-redux';
import { selectAllPsychologists } from '../../redux/psychologists/selectors';

const PsychoCardList = ({ openModal, closeModal }) => {
  const psychologists = useSelector(selectAllPsychologists);

  return (
    <ListStyled>
      {psychologists?.map((psychologist, index) => (
        <PsychoCard
          key={psychologist._id || index}
          psychologist={psychologist}
          openModal={openModal}
          closeModal={closeModal}
        />
      ))}
    </ListStyled>
  );
};

export default PsychoCardList;
