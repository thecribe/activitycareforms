import AllForms from "@/components/AllForms";
import Cover from "@/components/Cover";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Cover page_title={"forms"} page_description={"All form enquires"} />

      <AllForms />
    </Fragment>
  );
}
