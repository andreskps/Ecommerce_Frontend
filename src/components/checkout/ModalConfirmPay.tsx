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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  isOpen: boolean;
  detailsOrder?:{

  }
}

export function DialogDemo({ isOpen }: Props) {
  return (
    <Dialog modal={true} open={isOpen}>
           <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Gracias por tu compra</DialogTitle>
          <DialogDescription>Aquí están los detalles de tu orden:</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <h3 className="font-medium">Dirección de entrega</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Calle Principal 123, Colonia Centro
              <br />
              Ciudad, Estado 12345
            </div>
          </div>
          <div className="grid gap-2">
            <h3 className="font-medium">Total</h3>
            <div className="text-2xl font-bold">$99.99</div>
          </div>
          <div className="grid gap-2">
            <h3 className="font-medium">Mensaje</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Gracias por tu compra. Tu pedido será enviado a la brevedad.
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Listo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
