import { Loader2 } from "lucide-react"
import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";


interface ModalProps {
  message: string;
  title?: string;
  confirmText?: string;
  confirmVariant?: ButtonProps['variant'];
  onCancel: () => void;
  onConfirm: () => void;
  isOpen: boolean;
  showCancel?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
}

export default function ModalComponent(props: ModalProps) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onCancel}>
      <DialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle>
            {props.title ? props.title : 'Modal'}
          </DialogTitle>
        </DialogHeader>
        <div className={(props.isLoading && props.children) ? 'disabled' : ''}>
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
          <Button
            onClick={props.onConfirm}
            variant={props.confirmVariant}
            disabled={props.isLoading}
          >
            {props.isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {props.confirmText ? props.confirmText : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
