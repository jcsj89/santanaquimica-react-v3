import { NavLink } from "react-router-dom";

const number = () => Math.floor(Math.random() * 9999);

const NavBar = (props: { items: { to: string; name: string }[] }) => {
  return (
    <>
      <ul className="flex md:mr-32 flex-wrap font-lato gap-5 text-stone-900">
        {props.items.map((item) => (
          <li key={item.name + number()}>
            <NavLink className="hover:text-stone-700" to={item.to}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
