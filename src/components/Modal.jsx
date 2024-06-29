import classes from './modal.module.css';
function Modal({ hideModal, children }) {
  return (
    <>
      <div className={classes.backdrop} onClick={hideModal}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
