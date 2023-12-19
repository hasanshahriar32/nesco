"use client";
const useRedirect20 = () => {
    let Router;
    if (typeof window !== "undefined") {
      Router = require("next/router");
    }
  setTimeout(() => {
    Router.push("/");
  }, 20000);
};
export default useRedirect20;
