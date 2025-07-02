'use client';

import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { useRouter } from 'next/navigation';
import { use } from 'react';

type NotePreviewModalProps = {
  params: Promise<{ id: string }>;
};

export default function NotePreviewModal({ params }: NotePreviewModalProps) {
  const router = useRouter();
  const { id } = use(params);

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview id={Number(id)} onClose={handleClose} />
    </Modal>
  );
}
