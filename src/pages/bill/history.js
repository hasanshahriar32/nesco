import MainLayout from "@/Layouts/MainLayout";
import { BillHistory } from "@/components/BillHistory";
import { Card } from "@/components/ui/card";
const Page = () => {
  return (
    <div>
      <Card >
        <BillHistory />
      </Card>
    </div>
  );
};

export default Page;
Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
