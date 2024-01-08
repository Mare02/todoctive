import { ReactNode } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface ConfirmModalProps {
  message: string;
  title?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  isOpen: boolean;
  showCancel?: boolean;
  children?: ReactNode;
}

// export function ConfirmModal({ message, onCancel, onConfirm }: ConfirmModalProps) {
export default function ModalComponent(props: ConfirmModalProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onCancel} >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            {props.title ? props.title : 'Modal'}
          </ModalHeader>
          <ModalBody>
            {
              props.children
                ? props.children
                : <p>{props.message}</p>
            }
          </ModalBody>
          <ModalFooter>
            {
              props.showCancel
                ? <Button color="secondary" variant="light" onPress={props.onCancel}>Cancel</Button>
                : null
            }
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
