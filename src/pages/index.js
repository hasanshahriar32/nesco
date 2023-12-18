import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full flex items-center justify-center h-screen py-12 md:py-24 lg:py-32 xl:py-48 ">
      <div className=" px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                নেসকোর বিল ক্যালকুলেটর - নেসকো মিটার
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                এই সাইটটি আপনাকে নেসকো মিটারের⚡ বিল গণনা করতে সহায়তা করবে
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex justify-center space-x-2">
                <Link href="/bill">
                  <Button className="bg-white text-black" type="submit">
                    হিসাব করুন
                  </Button>
                </Link>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                আপনার ওয়েব অভিজ্ঞতা পুনরায় সংজ্ঞায়িত করতে প্রস্তুত হোন - {""}
                <Link
                  className="underline underline-offset-2 text-white"
                  href="https://shahriarhasan.vercel.app"
                >
                  যোগাযোগ করুন
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
