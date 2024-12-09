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
import { useState } from "react";
import { PassThrough } from "stream";
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textTitle, setTextTitle] = useState("");

  return (
    <section className="flex flex-col">
      <div className="grid grid-cols-3 ">
        <p className="p-5">Identificación sucursal</p>
        <Input
          type="text"
          className="p-5 pt-1"
          disabled={true}
          value={"11.123.999"}
        />
        <Input
          type="text"
          className="p-5 pt-1"
          disabled={true}
          value={"sucursal prueba 1"}
        />
        <p className="p-5">Rut supervisor</p>
        <Input
          type="text"
          className="p-5 pt-1"
          disabled={true}
          value={"19. 348.123-1"}
        />
        <Input
          type="text"
          className="p-5 pt-1"
          disabled={true}
          value={"Marcelo Ortiz"}
        />
      </div>
      <div className="grid grid-cols-5 ">
        <p className="p-5">Fecha movimiento</p>
        <Input
          type="text"
          className="p-5 pt-1"
          disabled={true}
          value={"12/11/2024"}
        />
        <p className="p-5">Clave acceso</p>
        <Input
          type="text"
          className="p-5 pt-1"
          
        />
        <Button color="primary" variant="light"  className="p-5 ">
          Cambiar clave
        </Button>
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
          <Modal
            isOpen={isOpen}
            size={"5xl"}
            onClose={onClose}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            backdrop={"blur"}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {textTitle}
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    {/* <Button color="primary" onPress={onClose}>
                      Action
                    </Button> */}
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </section>
  );
}
