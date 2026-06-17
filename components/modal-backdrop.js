'use client';

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return <div className="modal-backdrop" onClick={handleClose} />;
}