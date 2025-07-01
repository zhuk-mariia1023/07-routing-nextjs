'use client';

import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { useRouter } from 'next/navigation';

type NotePreviewModalProps = {
  params: { id: string };
};

export default function NotePreviewModal({ params }: NotePreviewModalProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview id={Number(params.id)} onClose={handleClose} />
    </Modal>
  );
}
