import { NavLink } from "react-router-dom";

const number = () => Math.floor(Math.random() * 9999);

export const ItemSideBar = (props: { to: string; name: string; icon: any }) => {
  return (
    <li className="py-1 sm:w-full" key={props.name + number()}>
      <NavLink
        className="
         w-full flex items-center flex-wrap ml-5 text-orange-800 hover:text-stone-950 antialiased hover:duration-500 duration-500"
        to={props.to}
      >
        <span className="text-xl sm:text-2xl">{props.icon}</span>
        <span className="ml-2 mr-6 sm:mx-4 text-stone-950 hover:text-stone-600 antialiased hover:duration-500 duration-500">
          {props.name}
        </span>
      </NavLink>
    </li>
  );
};
