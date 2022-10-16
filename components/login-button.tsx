import { Fragment, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'

const LoginButton = () => {
        let [isOpen, setIsOpen] = useState(false)

        function closeModal() {
            setIsOpen(false)
          }
        
        function openModal() {
            setIsOpen(true)
          }
          
          
  return (
    <>
    <button 
        type="button"
        onClick={openModal}
        className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-800  text-white disabled:cursor-default disabled:opacity-50"
        >
          ログイン
    </button>
    
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center" 
                  >
                    推し愛い
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 text-center">
                      『推し愛い』は、愛する推しのさらなる活躍を応援する
                      <p></p>
                      推し活プラットフォーム
                      <p></p>
                      さあ、推しの輪を共に広げよう
                    </p>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Login with Google
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default LoginButton