import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal({ isOpen, setIsOpen }) {
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 text-gray-800"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-white/30 backdrop-blur-lg flex justify-center items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white relative rounded-lg shadow-lg w-[50vw] h-[75vh] px-28 py-20">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 text-gray-600 cursor-pointer rounded-md absolute top-0 right-0 p-4"
                >
                  Skip
                </button>
              </div>
              <div className="flex flex-col gap-5">
                <Dialog.Title className="text-xl text-center font-bold pt-20">
                  Do you have a pet profile?
                </Dialog.Title>
                <div className="mt-4 flex justify-center items-center gap-4">
                  <button
                    onClick={() => setIsModalOpen2(true)}
                    className="cursor-pointer border rounded px-4 py-2 w-40 border-green-500 text-green-500"
                  >
                    Yes
                  </button>
                  <button className="cursor-pointer border rounded px-4 py-2 w-40 bg-[#ff741b] text-white">
                    Create Profile
                  </button>
                </div>
                {/* Corrected Component Call */}
                <GetAppointment
                  isOpen={isModalOpen2}
                  setIsOpen={setIsModalOpen2}
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

// Fixed Component Name and Syntax
export function GetAppointment({ isOpen, setIsOpen }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 text-gray-800"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-white/30 backdrop-blur-lg flex justify-center items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white relative rounded-lg shadow-lg w-[50vw] h-[75vh] px-28 py-20">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 text-gray-600 cursor-pointer rounded-md absolute top-0 right-0 p-4"
                >
                  Skip
                </button>
              </div>
              <div className="flex flex-col gap-5">
                <Dialog.Title className="text-xl text-center font-bold pt-20">
                  Get Appointment
                </Dialog.Title>
                <form action="">
                  <div className="flex items-center gap-4">
                  <input type="radio" name="option" id="option1" />Online Appointment
                  <input type="radio" name="option" id="option2" />In Person Appointment
                  </div>

                  <div className="mt-4 flex justify-center items-center gap-4">
                  <Link href="/appointment"
                      
                    //   onClick={() => router.push("/appointment")}
                      className="cursor-pointer border rounded px-4 py-2 w-40 bg-[#ff741b] text-white"
                    >Submit</Link>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
