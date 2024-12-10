"use client";
import { Card } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
// import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useState } from "react";
import { FaEdit, FaTrash, FaKey } from "react-icons/fa";

export const cajeros = [
  { name: "Raul Carvajal", rut: "11.111.510-4", key: "Raul" },
  { name: "Carlos Gutierrez", rut: "20.367.482-6", key: "Carlos" },
  { name: "Pedro Jimenez", rut: "12.387.560-9", key: "Pedro" },
  { name: "Osvaldo Chacon", rut: "17.877.795-1", key: "Osvaldo" },
  { name: "Ariel Guzman", rut: "10.389.560-k", key: "Ariel" },
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

export default function ModalAbrirCaja({ isOpen, textTitle, onClose }: any) {
  return (
    <Modal
      backdrop={"blur"}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      isOpen={isOpen}
      scrollBehavior="outside"
      size={"5xl"}
      onClose={onClose}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {textTitle}
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-3">
                <Card className="w-full space-y-5 p-4" radius="lg">
                  <p className="p-1 font-bold">Datos sucursal</p>
                  <div className="grid grid-cols-3 ">
                    <Input
                      className="p-1"
                      disabled={true}
                      label={"Sucursal"}
                      type="text"
                      value={"11.123.999"}
                    />
                    <Input
                      className="p-1"
                      disabled={true}
                      label={"Tesorero"}
                      type="text"
                      value={"Marcelo"}
                    />
                    <Input
                      className="p-1"
                      disabled={true}
                      label={"Fecha"}
                      type="text"
                      value={"12/12/2024"}
                    />
                  </div>
                </Card>
                <div className="grid grid-cols-12 gap-4">
                  <Card className="w-full p-4 col-span-7" radius="lg">
                    <div className="grid grid-cols-6 gap-4 mb-2">
                      <p className="p-3 font-bold col-start-1 col-end-3 ">
                        Cajeros
                      </p>
                      <Button className="p-1 font-bold col-end-7 col-span-2">
                        Agregar cajero
                      </Button>
                    </div>

                    <div className="">
                      <Table
                        isStriped
                        aria-label="Example static collection table"
                        color={"default"}
                      >
                        <TableHeader>
                          <TableColumn>Rut</TableColumn>
                          <TableColumn>Nombre</TableColumn>
                          <TableColumn>Acciones</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {cajeros.map((item, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell>{item.rut}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                  <div className="grid grid-cols-3 gap-4">
                                    <Button size="sm" title="Editar cajero">
                                      <FaEdit />
                                    </Button>
                                    <Button
                                      size="sm"
                                      title="Cambiar permisos cajero"
                                    >
                                      <FaKey />
                                    </Button>
                                    <Button size="sm" title="Eliminar cajero">
                                      <FaTrash />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </Card>
                  <Card className="w-full p-4 col-span-5" radius="lg">
                    <p className="p-1 font-bold">Permisos cajero</p>
                    <div className="">
                      {/* <Autocomplete
                        className="w-full mb-5"
                        defaultItems={cajeros}
                        label="Cajero"
                        placeholder="Seleccione un cajero"
                      >
                        {(item) => (
                          <AutocompleteItem key={item.key}>
                            {item.rut} {item.name}
                          </AutocompleteItem>
                        )}
                      </Autocomplete> */}
                      <Table
                        isStriped
                        aria-label="Example static collection table"
                        color={"default"}
                      >
                        <TableHeader>
                          <TableColumn>Estados</TableColumn>
                          <TableColumn>Descripcion</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {permisos.map((item, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell>
                                  <input type="checkbox" />
                                </TableCell>
                                <TableCell>{item.servicio}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </Card>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
