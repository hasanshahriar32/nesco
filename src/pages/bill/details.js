import { BillDetails } from "@/components/component/bill-details";
import MainLayout from "@/Layouts/MainLayout";
const Page = () => {
  return <div>
    <BillDetails />
  </div>;
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
