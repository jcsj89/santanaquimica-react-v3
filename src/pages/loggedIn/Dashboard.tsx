import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/dashboard/SideBar";

export const Dashboard = () => {
  return (
    <div className="container grid sm:grid-cols-12 border-l border-r border-b sm:min-h-[600px] mx-auto">
      <section className="col-span-12 sm:col-span-2 h-full sm:border-r border-b sm:border-b-0">
        <SideBar />
      </section>

      <section className="col-span-12 sm:col-span-10 p-3 ">
        <Outlet />
      </section>
    </div>
  );
};
