import { ReactNode } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface ConfirmModalProps {
  message: string;
  title?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  isOpen: boolean;
  showCancel?: boolean;
  showProgress?: boolean;
  children?: ReactNode;
}

export default function ModalComponent(props: ConfirmModalProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onCancel} >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            {props.title ? props.title : 'Modal'}
          </ModalHeader>
          <ModalBody>
            <div className={(props.showProgress && props.children) ? 'disabled' : ''}>
              {
                props.children
                  ? props.children
                  : <p>{props.message}</p>
              }
            </div>
          </ModalBody>
          <ModalFooter>
            {
              props.showCancel &&
                <Button color="secondary" variant="light" onPress={props.onCancel}>Cancel</Button>
            }
            <Button color="danger" variant="light" onPress={props.onCancel}>
              Cancel
            </Button>
            <Button color="primary" onPress={props.onConfirm} isLoading={props.showProgress}>
              {props.confirmText ? props.confirmText : 'Save'}
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
