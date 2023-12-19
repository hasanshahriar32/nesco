import MainLayout from "@/Layouts/MainLayout";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
export default function Bill() {
  const mainMeterContext = useContext(AppContext);
  return (
    <div className="overflow-y-auto h-[100vh] border-base-300">
      <div className="hero flex  justify-center items-center flex-col gap-2 min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          <h1>{mainMeterContext.mainMeterContext}</h1>
        </div>
        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  );
}

Bill.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
