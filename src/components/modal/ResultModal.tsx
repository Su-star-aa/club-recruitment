// ResultModal.tsx — 报名成功结果弹窗（可复用组件 #9）
// 编排组件：Modal（#4）+ Button（#1）

import Modal from '@components/ui/Modal';
import Button from '@components/ui/Button';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  details?: string;
}

export default function ResultModal({
  isOpen,
  onClose,
  title = '提交成功',
  message,
  details,
}: ResultModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="result-modal">
        <p className="result-modal__message">{message}</p>
        {details && <p className="result-modal__details">{details}</p>}
        <Button variant="primary" block onClick={onClose}>
          知道了
        </Button>
      </div>
    </Modal>
  );
}
