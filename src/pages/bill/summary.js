import MainLayout from "@/Layouts/MainLayout";
import { BillSummary } from "@/components/component/bill-summary";

const Page = () => {
  return (
    <div>
      <BillSummary />
    </div>
  );
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
