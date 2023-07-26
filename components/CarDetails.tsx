import { CarProps } from "@/types";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CarDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {
  return (
    <>
      {/* <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>

        </Dialog>
      </Transition> */}
    </>
  );
};

export default CarDetails;
