import Sidebar from "@/components/dashboard/Sidebar";
import { Fragment } from "react";

export const metadata = {
  title: " Referral Form | Activity Care Services",
  description: "Activity Care Services Referral Form",
};

export default function Layout({ children }) {
  return (
    <Fragment>
      <section className=" w-full  p-5 md:p-0 md:flex justify-center items-center text-sm">
        <section className=" w-full md:w-3/4 md:h-[90%] shadow-sm flex md:flex-row flex-col gap-5 p-5">
          <section className="w-full md:w-1/6 h-full ">
            <Sidebar />
          </section>
          <section className="w-full md:w-5/6 h-full">{children}</section>
        </section>
      </section>
    </Fragment>
  );
}
