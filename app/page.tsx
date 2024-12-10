"use client";
import { Card, CardBody } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useState } from "react";
import ModalAbrirCaja from "./caja/ModalAbrirCaja";
import { on } from "events";

export const cajeros = [
  { name: "Raul", rut: "11.111.510-4", key: "Raul" },
  { name: "Carlos", rut: "20.367.482-6", key: "Carlos" },
  { name: "Pedro", rut: "12.387.560-9", key: "Pedro" },
  { name: "Osvaldo", rut: "17.877.795-1", key: "Osvaldo" },
  { name: "Ariel", rut: "10.389.560-k", key: "Ariel" },
];
export const permisos = [
  { VisChecked: false, servicio: "ENTA BAS" },
  { isChecked: false, servicio: "DEV. BAS" },
  { isChecked: false, servicio: "VALORIZA PAS" },
  { isChecked: false, servicio: "VENTA PAS" },
  { isChecked: false, servicio: "REEMBOLSOS" },
  { isChecked: false, servicio: "SOL.PRESTAMOS" },
  { isChecked: false, servicio: "AUT. PRESAMOS" },
  { isChecked: false, servicio: "DEV. PAS" },
  { isChecked: false, servicio: "ANULA BAS" },
  { isChecked: false, servicio: "ENTREGAS" },
  { isChecked: false, servicio: "PRECIERRE" },
  { isChecked: false, servicio: "VENTA AUGE" },
];

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textTitle, setTextTitle] = useState("");

  return (
    <section className="flex flex-col">
      <div className="grid grid-cols-3 ">
        <p className="p-5 font-bold">Identificación sucursal</p>
        <Input
          className="p-5 pt-1"
          disabled={true}
          type="text"
          value={"11.123.999"}
        />
        <Input
          className="p-5 pt-1"
          disabled={true}
          type="text"
          value={"sucursal prueba 1"}
        />
        <p className="p-5 font-bold">Rut supervisor</p>
        <Input
          className="p-5 pt-1"
          disabled={true}
          type="text"
          value={"19.348.123-1"}
        />
        <Input
          className="p-5 pt-1"
          disabled={true}
          type="text"
          value={"Marcelo Ortiz"}
        />
      </div>

      <div className="inline-block text-center justify-center p-4">
        <div className="grid grid-cols-5 gap-4">
          {[
            "Abre caja",
            "Cierre caja",
            "Cierre sucursal",
            "Crea cajero",
            "Autorizacion especial",
            "Autorizacion terceros",
            "Emite caja",
            "Emite sucursal",
            "Estado bas",
            "Bas por rut beneficiario",
          ].map((item, index) => {
            return (
              <Card key={index}>
                <CardBody className="p-8 pt-10 pb-10">
                  <button
                    onClick={() => {
                      setTextTitle(item);
                      onOpen();
                    }}
                  >
                    <p className="text-center">{item}</p>
                  </button>
                </CardBody>
              </Card>
            );
          })}
          <ModalAbrirCaja isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </section>
  );
}
