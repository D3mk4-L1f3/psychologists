// import { useEffect } from "react";
// import ReactModal from "react-modal";
// import { customStyles } from "./Modal.styled";
// import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

// export const Modal = ({ isModalOpen, onCloseModal, modalContent }) => {
//   useEffect(() => {
//     isModalOpen ? disableBodyScroll(document.body) : clearAllBodyScrollLocks();
//   }, [isModalOpen]);

//   return (
//     <>
//       <ReactModal
//         style={customStyles}
//         isOpen={isModalOpen}
//         onRequestClose={onCloseModal}
//       >
//         {modalContent}
//       </ReactModal>
//     </>
//   );
// };
