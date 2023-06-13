import { MdCall, MdMailOutline, MdWhatsapp } from "react-icons/md";

const ContactBar = () => {
  return (
    <div className="flex justify-evenly flex-wrap mb-4 border-b p-2">
      <div className="flex justify-center items-center">
        <MdCall className="text-lime-800" />
        <span className="ml-2">17 32691200</span>
      </div>

      <div className="flex justify-center items-center">
        <MdWhatsapp className="text-lime-800" />
        <span className="ml-2">17 996193941</span>
      </div>

      <div className="flex justify-center items-center">
        <MdMailOutline className="text-lime-800" />
        <span className="ml-2">santanaquimica@terra.com.br</span>
      </div>
    </div>
  );
};

export default ContactBar;
