import { NavLink } from "react-router-dom";

const number = () => Math.floor(Math.random() * 9999);

export const ItemSideBar = (props: { to: string; name: string; icon: any }) => {
  return (
    <li
      className="py-1 sm:w-full text-xs sm:text-base"
      key={props.name + number()}
    >
      <NavLink
        className="
         w-full pl-2 sm:pl-0 flex items-center flex-wrap
         text-gray-700 hover:text-blue-600 antialiased hover:duration-200"
        to={props.to}
      >
        <span className="">{props.icon}</span>
        <span
          className="ml-1 sm:ml-2
        antialiased"
        >
          {props.name}
        </span>
      </NavLink>
    </li>
  );
};
