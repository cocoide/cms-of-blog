import UpdatingIcon from "public/icon/update-icon.svg"
import DowonMenu from "../components/button/down-menu"
import TabVar from "../components/button/tab-var"
const infuluencer = () => {
  return (
<>
<div className="m-4 p-1 flex flex-col justify-center">
  <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-gray-700 px-4 py-1.5 font-semibold text-white hover:bg-gray-900">
    Download
    <svg className="stroke-gray-50 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.5 12L12 16.5M12 16.5L7.5 12M12 16.5V6" stroke-linecap="round" stroke-linejoin="round" className="group-hover:animate-bounce-little origin-center transition" />
      
      <path d="M3 16.5V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V16.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</div>

<div className="m-4">
  <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-gray-700 px-4 py-1.5 font-semibold text-white hover:bg-gray-900">
    Update
    <svg className="stroke-gray-50 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17 9.3466L21.0154 9.34838V9.3466M4.03076 9.86481C5.21003 5.46371 9.73381 2.85191 14.1349 4.03118C15.5867 4.42017 16.8437 5.17309 17.8343 6.16547L21.0154 9.3466M21.0154 5.5V9.3466" stroke-linecap="round" stroke-linejoin="round" className="origin-center transition duration-300 group-hover:rotate-45" />

      <path d="M2.98413 18.5V14.6517M2.98413 14.6517H7M2.98413 14.6517L6.16502 17.8347C7.15555 18.827 8.41261 19.58 9.86436 19.9689C14.2654 21.1482 18.7892 18.5364 19.9685 14.1353" stroke-linecap="round" stroke-linejoin="round" className="origin-center transition duration-300 group-hover:rotate-45" />
    </svg>
  </button>
</div>

<TabVar/>
</>
  )
}
export default infuluencer