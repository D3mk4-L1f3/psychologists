/* eslint-disable react/prop-types */
import { AccessModalContainer, CloseButton } from './AccessModal.styled';
import sprite from '../../../styles/sprite.svg';
import Loader from '../../Shared/Loader/Loader';

const AccessModal = ({ children, closeModal, onSubmit }) => {
  const isLoading = false;

  const handleClose = () => {
    closeModal(true);
  };

  return (
    <AccessModalContainer onSubmit={onSubmit}>
      <CloseButton type="button" onClick={handleClose}>
        <svg>
          <use href={sprite + '#close'} />
        </svg>
      </CloseButton>
      {children}
      {isLoading && <Loader variant="access-modal" />}
    </AccessModalContainer>
  );
};

export default AccessModal;
