import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface ConfirmModalProps {
  message: string;
  title?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  isOpen: boolean;
}

// export function ConfirmModal({ message, onCancel, onConfirm }: ConfirmModalProps) {
export function ConfirmModal(props: ConfirmModalProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onCancel} >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            {props.title ? props.title : 'Modal'}
          </ModalHeader>
          <ModalBody>
            <p>{props.message}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={props.onCancel}>
              Cancel
            </Button>
            <Button color="primary" onPress={props.onConfirm}>
              {props.confirmText ? props.confirmText : 'Save'}
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
