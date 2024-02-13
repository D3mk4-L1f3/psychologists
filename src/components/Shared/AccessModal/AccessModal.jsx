/* eslint-disable react/prop-types */
import { AccessModalContainer, CloseButton } from './AccessModal.styled';
import sprite from '../../../styles/sprite.svg';

const AccessModal = ({ children, closeModal }) => {
  const handleClose = () => {
    closeModal(true);
  };

  return (
    <AccessModalContainer>
      <CloseButton type="button" onClick={handleClose}>
        <svg>
          <use href={sprite + '#close'} />
        </svg>
      </CloseButton>
      {children}
    </AccessModalContainer>
  );
};

export default AccessModal;
