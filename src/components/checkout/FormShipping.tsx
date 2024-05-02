import React from 'react'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'

export const FormShipping = () => {
  return (
     <>
     <div className="space-y-2">
          <h2 className="text-2xl font-bold">Datos de envío</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Ingresa tus datos de envío para completar tu pedido.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="country">Departamento</Label>
            <Select defaultValue="US" id="country">
              <SelectTrigger>
                <SelectValue placeholder="Selecciona tu país" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">Estados Unidos</SelectItem>
                <SelectItem value="MX">México</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="country">Municipio</Label>
            <Select defaultValue="US" id="country">
              <SelectTrigger>
                <SelectValue placeholder="Selecciona tu país" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">Bello</SelectItem>
                <SelectItem value="MX">México</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="address">Dirección</Label>
            <Input id="address" placeholder="Ingresa tu dirección" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="info">Información adicional</Label>
            <Input
              id="info"
              placeholder="Edificio, piso, apto, etc. (opcional)"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="barrio">Barrio</Label>
            <Input
              id="barrio"
              placeholder="Ingresa tu barrio (opcional)"
              type="text"
            />
          </div>
        </form>
     </>
  )
}
