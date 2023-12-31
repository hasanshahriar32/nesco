import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Contact from "@/components/Contact";
import VideoBanner from "@/components/VideoBanner";

export default function Home() {
  return (
    <div className="h-screen mockup-browser border border-base-300 ">
      <div className="mockup-browser-toolbar">
        <div className="input">https://nesco.vercel.app</div>
      </div>
      <section className="border-t border-base-300 w-full flex  overflow-y-auto justify-center min-h-[60vh]  max-h-[95vh] py-12 md:pb-24 ">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space--4 text-center">
              <div className="space-y-2 mb-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  নেসকোর বিল ক্যালকুলেটর - নেসকো মিটার
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  এই সাইটটি আপনাকে নেসকো মিটারের⚡ বিল গণনা করতে সহায়তা করবে।
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mx-auto">
                <form className="flex justify-center space-x-2">
                  <Link href="/bill">
                    <Button
                      className="bg-white text-black hover:text-white"
                      type="submit"
                    >
                      হিসাব করুন
                    </Button>
                  </Link>
                  <Link href="/bill/history">
                    <Button className="bg-transparent text-white" type="submit">
                      ইতিহাস
                    </Button>
                  </Link>
                </form>
                <p className="text-xs text-zinc-200 dark:text-zinc-100">
                  নেসকো প্রি-পেইড কাস্টমার পোর্টাল - {""}
                  <Link
                    className="underline underline-offset-2 text-white"
                    href="https://prepaid.nesco.gov.bd/index.php"
                  >
                    ভিজিট করুন।
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <VideoBanner />
        </div>
      </section>
      <Contact />
    </div>
  );
}
