import MainLayout from "@/Layouts/MainLayout";
import { BillForm1 } from "@/components/component/bill-form1";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
export default function Bill() {
  const mainMeterContext = useContext(AppContext);
  return (
    <div className="overflow-y-auto h-[100vh] border-base-300">
      <BillForm1 />
    </div>
  );
}

Bill.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
