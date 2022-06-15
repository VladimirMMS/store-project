import { useState } from 'react';
import { Row } from '../interfaces';

export function useCreateData() {
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const handleCreateClose = () => setCreateOpen(false);
  const handleCreateOpen = () => setCreateOpen(true);

  const handleCreate = () => {
    setCreateOpen(true)
  };
 

  return {
      createOpen,
      handleCreate,
      handleCreateClose,
      handleCreateOpen,
      setCreateOpen,
  }
}
