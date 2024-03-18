/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import FavoriteCardList from '../components/FavoriteCardList/FavoriteCardList';
import { useEffect } from 'react';
import getFavoritePsychologists from '../redux/psychologists/operations/getOperations/getFavoritePsychologists';

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritePsychologists());
    console.log('bang');
  }, []);

  return <FavoriteCardList />;
};

export default Favorite;
