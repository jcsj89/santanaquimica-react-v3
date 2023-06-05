import {
  MdListAlt,
  MdOutlineAnalytics,
  MdOutlineFace,
  MdOutlineLogout,
  MdOutlineMarkEmailUnread,
  MdOutlineNewspaper,
} from "react-icons/md";

import { ItemSideBar } from "./ItemSideBar";

const number = () => Math.floor(Math.random() * 9999);

const items = [
  { to: "/dashboard/produtos", name: "Produtos" },
  { to: "/dashboard/produtos/registrar", name: "Registrar" },
  { to: "/dashboard/usuarios", name: "Usuarios" },
  { to: "/dashboard/estatisticas", name: "Estatisticas" },
];
// produtos
// usuarios
// roles
// statistica
//

export const SideBar = () => {
  return (
    <aside className="flex flex-col h-full ">
      <ul className="flex items-center sm:flex-col flex-wrap font-lato sm:h-full">
        <ItemSideBar
          to="/dashboard/produtos"
          name="Produtos"
          icon={<MdListAlt />}
        />
        <ItemSideBar
          to="/dashboard/usuarios"
          name="Usuarios"
          icon={<MdOutlineFace />}
        />
        <ItemSideBar
          to="/dashboard/estatisticas"
          name="Estatisticas"
          icon={<MdOutlineAnalytics />}
        />
        <ItemSideBar
          to="/dashboard/produtos/registrar"
          name="Linguica"
          icon={<MdOutlineFace />}
        />
        <ItemSideBar
          to="/dashboard"
          name="Emails"
          icon={<MdOutlineMarkEmailUnread />}
        />
        <ItemSideBar
          to="/dashboard"
          name="NewsLetter"
          icon={<MdOutlineNewspaper />}
        />
        <ItemSideBar
          to="/dashboard"
          name="Permissoes"
          icon={<MdOutlineFace />}
        />
      </ul>
      <footer className="text-orange-600 sm:flex items-center hidden">
        <MdOutlineLogout />
        <span className="pl-1">Logout</span>
      </footer>
    </aside>
  );
};
