import {
  MdListAlt,
  MdOutlineAnalytics,
  MdOutlineDashboard,
  MdOutlineFace,
  MdOutlineLogout,
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
    <aside className="flex flex-col h-full sm:border-none">
      <div className="flex items-center bg-gray-300 text-blue-700 p-5 justify-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
        <span className="text-2xl sm:text-3xl text-gray-950 ">
          <MdOutlineDashboard />
        </span>
        <span className="ml-5 font-bold">Dashboard</span>
      </div>
      <ul className="flex items-center sm:flex-col flex-wrap font-lato sm:h-full py-1 text-sm sm:text-lg justify-evenly sm:justify-normal">
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
          name="Permissoes"
          icon={<MdOutlineFace />}
        />
      </ul>
      <footer className="text-stone-600 sm:flex items-center hidden ">
        <MdOutlineLogout />
        <span className="pl-2">Logout</span>
      </footer>
    </aside>
  );
};
