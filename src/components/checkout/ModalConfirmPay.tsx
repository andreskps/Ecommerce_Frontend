import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  detailsOrder?: {};
}

export function DialogDemo({ isOpen }: Props) {
  return (
    <Dialog modal={true} open={isOpen}>
     <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-primario">¡Gracias por tu compra!</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Tu producto será enviado a tu casa lo más pronto posible. Serás contactado para confirmar tu pedido.
        </DialogDescription>
        <DialogFooter className="justify-center">
          <Link
            href="/"
          className="bg-primario text-white p-2 rounded-md

          ">Seguir comprando</Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
