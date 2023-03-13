import { useEffect } from 'react';
import Portal from './Portal';

function ModalExm({ setIsShow, isShow }) {
  const onClose = () => {
    setIsShow(false);
  };

  const stopProp = (event) => {
    event.stopPropagation();
  };

  const keydown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keydown);

    return () => {
      window.removeEventListener('keydown', keydown);
    };
  }, []);

  if (!isShow) {
    return null;
  }

  return (
    <Portal>
      <div className="modalWrapper" onClick={onClose}>
        <div className="modalContent" onClick={stopProp}>
          MODAL WINDOW
        </div>
      </div>
    </Portal>
  );
}

export default ModalExm;
