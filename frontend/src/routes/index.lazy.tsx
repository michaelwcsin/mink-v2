import { createLazyFileRoute } from "@tanstack/react-router";
import loginSVG from "../assets/login.svg";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-screen p-4 bg-[#FFFFFF] overflow-hidden">
      <h2 className="font-semibold">MINK</h2>

      <div className="h-full flex items-center justify-center">
        <div className="bg-[#FFFFFF] rounded-[0.625rem] h-[36.51vw] w-[26.302vw] border p-[2.25rem]">
          <h4 className="pb-[1.8rem] font-light text-3xl">Welcome!</h4>
          <h2 className="font-[500] text-[1.6vw]">Sign in to</h2>
          <h2 className="font-[400] text-[0.833vw] pb-[3rem]">MINK</h2>

          <p className="text-[1vw]">Username</p>
          <p className="text-[1vw]">Password</p>
        </div>

        <img className="hidden md:block " src={loginSVG} alt="Login" />
      </div>
    </div>
  );
}
