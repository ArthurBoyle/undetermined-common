import { useState, useRef } from 'react';

interface ModalProps {
  open: boolean;
  onCancel: () => void;
  [propName: string]: unknown;
}

type ShowModal = (params?: Record<string, unknown>) => void;

type ModalResult = [ModalProps, ShowModal];

const useModal = (): ModalResult => {
  const [open, setOpen] = useState<boolean>(false);
  const paramsRef = useRef({});

  /**
   * 显示modal
   */
  const showModal = (params?: Record<string, unknown>): void => {
    paramsRef.current = params || {};
    setOpen(true);
  };

  /**
   * 取消
   */
  const onCancel = (): void => {
    setOpen(false);
  };

  return [{ open, onCancel, ...paramsRef.current }, showModal];
};

export default useModal;
