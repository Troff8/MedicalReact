import * as Dialog from '@radix-ui/react-dialog';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onChange, children }) => {
    return (
        <Dialog.Root defaultOpen={isOpen} open={isOpen} onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay} />
                <Dialog.Content className={styles.content}>
                    <div>
                        {children}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Modal;
