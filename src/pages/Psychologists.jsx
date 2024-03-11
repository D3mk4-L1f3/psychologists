/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import PsychoCardList from '../components/PsychoCardList/PsychoCardList';
import Wrapper from '../components/Shared/Wrapper/Wrapper';
import { useEffect } from 'react';
import { getAllPsychologists } from '../redux/psychologists/operations';

const Psychologists = ({ openModal, closeModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPsychologists());
  }, []);

  return (
    <Wrapper>
      <PsychoCardList openModal={openModal} closeModal={closeModal} />
    </Wrapper>
  );
};

export default Psychologists;
