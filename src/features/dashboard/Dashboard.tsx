import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

export const Dashboard = () => {
  return (
    <>
      <div className="container max-w-screen-lg grid sm:grid-cols-12 sm:min-h-[600px] mx-auto">
        <section
          className="col-span-12 sm:col-span-3 lg:col-span-2 h-full
        sm:border-r border-b sm:border-b-0 py-2 sm:pr-4 "
        >
          <SideBar />
        </section>

        <section className="col-span-12 sm:col-span-9 lg:col-span-10 py-2 sm:pl-8">
          <Outlet />
        </section>
      </div>
    </>
  );
};
