import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


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
    <Dialog open={props.isOpen} onOpenChange={props.onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {props.title ? props.title : 'Modal'}
          </DialogTitle>
        </DialogHeader>
        <div className={(props.showProgress && props.children) ? 'disabled' : ''}>
          {
            props.children
              ? props.children
              : <p>{props.message}</p>
          }
        </div>
        <DialogFooter>
          {
            props.showCancel &&
            <DialogClose asChild>
              <Button onClick={props.onCancel}>
                Cancel
              </Button>
            </DialogClose>
          }
          <Button color="primary" onClick={props.onConfirm}>
            {props.confirmText ? props.confirmText : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
