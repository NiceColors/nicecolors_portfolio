"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { NotebookText, PartyPopper, ScrollText } from "lucide-react";
import * as React from "react";

interface ExtraInfoDialogProp {
  iconType?: "paper" | "prize" | "contribution";
  dialogTitle: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  children: React.ReactNode;
}

export const ExtraInfoDialog: React.FC<ExtraInfoDialogProp> = ({
  iconType = "paper",
  dialogTitle,
  size = "md",
  children,
}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  let Icon = <ScrollText />;

  switch (iconType) {
    case "paper": {
      Icon = <ScrollText />;
      break;
    }
    case "prize": {
      Icon = <PartyPopper />;
      break;
    }
    case "contribution": {
      Icon = <NotebookText />;
      break;
    }
  }

  return (
    <>
      <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
        {Icon}
      </Button>
      <Modal
        isOpen={isOpen}
        size={size}
        onClose={onClose}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {dialogTitle}
          </ModalHeader>
          <ModalBody className="p-6 pt-0">{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
