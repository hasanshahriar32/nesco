import MainLayout2 from "@/Layouts/MainLayout2";
import { BillHistory } from "@/components/BillHistory";
import { Card } from "@/components/ui/card";
const Page = () => {
  return (
    <div>
      <Card>
        <BillHistory />
      </Card>
    </div>
  );
};

export default Page;
Page.getLayout = function getLayout(page) {
  return <MainLayout2>{page}</MainLayout2>;
};
