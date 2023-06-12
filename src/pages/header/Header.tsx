import logo from "../../_assets/logo.png";
import NavBar from "../../components/site/NavBar";

const items = [
  { to: "/", name: "Home" },
  { to: "/produtos", name: "Produtos" },
  { to: "/sobre", name: "Sobre" },
  { to: "/login", name: "Login" },
  { to: "/dashboard", name: "Dashboard" },
];

const Header = () => {
  return (
    <div className="w-full justify-center border-b mx-auto">
      <div
        className="max-w-screen-lg flex items-center sm:justify-between justify-center
         flex-wrap mx-auto py-2"
      >
        <div className="my-1 ">
          <img src={logo} alt="santana" />
        </div>

        <div className="sm:my-1 ">
          <NavBar items={items} />
        </div>
      </div>
    </div>
  );
};

export default Header;
