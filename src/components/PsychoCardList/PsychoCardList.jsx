import PsychoCard from '../PsychoCard/PsychoCard';
import psychologists from '../../helpers/psychologists.json';
import { ListStyled } from './PsychoCardList.styled';

const PsychoCardList = () => {
  return (
    <ListStyled>
      {psychologists?.map((psychologist, index) => (
        <PsychoCard key={index} psychologist={psychologist} />
      ))}
    </ListStyled>
  );
};

export default PsychoCardList;
