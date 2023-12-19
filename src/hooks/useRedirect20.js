
const useRedirect20 = () => {
  if (typeof window !== "undefined") {
    const router = require("next/router");
    setTimeout(() => {
      router.push("/");
    }, 20000);
  }
};

export default useRedirect20;
