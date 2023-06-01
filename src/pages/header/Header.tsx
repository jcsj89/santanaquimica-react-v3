import logo from "../../assets/logo.png";
import NavBar from "../../components/ui/NavBar";

const items = [
  { to: "/", name: "Home" },
  { to: "/produtos", name: "Produtos" },
  { to: "/sobre", name: "Sobre" },
  { to: "/login", name: "Login" },
  { to: "/dashboard", name: "Dashboard" },
];

const Header = () => {
  return (
    <>
      <div className="border-b p-4 flex  items-center justify-center sm:justify-between lg:justify-evenly  gap-5 flex-wrap">
        <div className="">
          <img src={logo} alt="santana" />
        </div>

        <NavBar items={items} />


      </div>
    </>
  );
};

export default Header;
