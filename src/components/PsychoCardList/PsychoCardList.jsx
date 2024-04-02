/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import PsychoCard from './PsychoCard/PsychoCard';
import { ListStyled } from './PsychoCardList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllPsychologists,
  selectFavoritePsychologists,
} from '../../redux/psychologists/selectors';
import { useEffect } from 'react';
import { getFavoritePsychologists } from '../../redux/psychologists/operations';

const PsychoCardList = ({ openModal, closeModal }) => {
  const psychologists = useSelector(selectAllPsychologists);
  const favoritePsychologists = useSelector(selectFavoritePsychologists);
  const emptyFavorite = favoritePsychologists?.length === 0;
  const checkFavorite = !!psychologists && emptyFavorite;
  const dispatch = useDispatch();

  // Приклад як витягнути готові картки для доданих у улюблене психологів
  // const favoriteList = psychologists?.filter(psychologist =>
  //   favoritePsychologists.includes(psychologist._id)
  // );
  // console.log(favoriteList);

  useEffect(() => {
    if (checkFavorite) {
      dispatch(getFavoritePsychologists());
    }
  }, [checkFavorite]);

  return (
    <ListStyled>
      {psychologists?.map((psychologist, index) => (
        <PsychoCard
          key={psychologist._id || index}
          psychologist={psychologist}
          openModal={openModal}
          closeModal={closeModal}
          addedToFavorite={favoritePsychologists}
        />
      ))}
    </ListStyled>
  );
};

export default PsychoCardList;
