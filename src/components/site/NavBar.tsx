import { NavLink } from "react-router-dom";

const number = () => Math.floor(Math.random() * 9999);

const NavBar = (props: { items: { to: string; name: string }[] }) => {
  return (
    <>
      <ul
        className="flex flex-wrap font-lato justify-between
      gap-2 sm:gap-4 text-gray-500 "
      >
        {props.items.map((item) => (
          <li key={item.name + number()}>
            <NavLink
              className="hover:text-zinc-900
              hover:ease-in-out hover:delay-100 hover:transition"
              to={item.to}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
