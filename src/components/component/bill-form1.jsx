/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/hKHBJ8ShyWe
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useRedirect from "@/hooks/useRedirect";

export function BillForm1() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRedirect("/bill/details");
  };

  return (
    <main className="container mx-auto p-6">
      <form className="mb-24 space-y-8 max-w-2xl mx-auto">
        <Card className="p-4 space-y-4">
          <CardHeader>
            <h1 className="text-2xl font-bold">তারিখ নির্বাচন</h1>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Label htmlFor="month">মাস</Label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  বিলিং মাস নির্বাচন করুন
                </option>
                <option>জানুয়ারি – January </option>
                <option>ফেব্রুয়ারী – February </option>
                <option>মার্চ – March </option>
                <option>এপ্রিল – April </option>
                <option>মে – May </option>
                <option>জুন – June </option>
                <option>জুলাই – July </option>
                <option>আগষ্ট – August</option>
                <option>সেপ্টেম্বর – September </option>
                <option>অক্টোবর – October </option>
                <option>নভেম্বর – November </option>
                <option>ডিসেম্বর – December</option>
              </select>
            </div>
            <div className="w-full md:w-1/2">
              <Label htmlFor="year">বছর</Label>
              <Input
                className="w-full h-12"
                id="year"
                placeholder="বছর নির্বাচন করুন"
                type="number"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="p-4 space-y-4">
          <CardHeader>
            <h2 className="text-2xl font-bold">মেইন মিটারের তথ্য</h2>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Label htmlFor="float1">মাসের শুরুতে ব্যালেন্স</Label>
              <Input
                className="w-full"
                id="float1"
                placeholder="0.00"
                step="0.01"
                type="number"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Label htmlFor="float2">মাসের শেষে ব্যালেন্স</Label>
              <Input
                className="w-full"
                id="float2"
                placeholder="0.00"
                step="0.01"
                type="number"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="p-4 space-y-4">
          <CardHeader>
            <h2 className="text-2xl font-bold">সাব মিটারের তথ্য</h2>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Label htmlFor="float3">মাসের শুরুতে ব্যালেন্স</Label>
              <Input
                className="w-full"
                id="float3"
                placeholder="0.00"
                step="0.01"
                type="number"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Label htmlFor="float4">মাসের শেষে ব্যালেন্স</Label>
              <Input
                className="w-full"
                id="float4"
                placeholder="0.00"
                step="0.01"
                type="number"
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
            type="submit"
          >
            পরবর্তী
          </Button>
        </div>
      </form>
    </main>
  );
}
