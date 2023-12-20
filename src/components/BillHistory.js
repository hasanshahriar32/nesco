/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5aquAsar05B
 */

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { Button } from "./ui/button";

export function BillHistory() {
  const [billData, setBillData] = useState([]);
  // get data from local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("billDataList");
      // console.log(storedData);
      if (storedData) {
        // Parse the stored data if it exists
        const parsedData = JSON.parse(storedData);
        setBillData(parsedData);
      }
    }
  }, []);
  const ClearStorage = () => {
    localStorage.clear();
    setBillData([]);
  };
  return (
    <div className="flex flex-col w-full min-h-screen pb-8">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xl md:text-2xl">হিসাবের ইতিহাস</CardTitle>
          <Button
            onClick={() => {
              ClearStorage();
            }}
            className="bg-white text-gray-700 hover:text-gray-200"
          >
            Clear All
          </Button>
          {/* <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" /> */}
        </CardHeader>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">হিসাব তাং</TableHead>
                <TableHead>মেইন মিটার খরচ</TableHead>
                <TableHead>সাব মিটার খরচ</TableHead>
                <TableHead>মোট বিল</TableHead>
                <TableHead>ইউনিট চার্জ</TableHead>
                <TableHead className="text-right">সময়কাল</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billData?.map((item) => (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">
                    {new Date(item?.id).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{item?.mainMeterUserBill}</TableCell>
                  <TableCell>{item?.subMeterUserBill}</TableCell>
                  <TableCell>{item?.totalBill}</TableCell>
                  <TableCell>{item?.finalUnitCost}</TableCell>
                  <TableCell className="text-right">
                    {item?.month + `${", "}` + item?.year}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
