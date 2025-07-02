'use client';

import { ReactNode, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  const router = useRouter();

  const close = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [close]);

  return ReactDOM.createPortal(
    <div
      className={css.backdrop}
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
