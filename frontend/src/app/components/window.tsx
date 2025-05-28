import LoginForm from "../login/page";

const PageType = {
  Login: "login",
  SignUp: "signup",
} as const;

export default function AuthWindow({
  pageType,
  children,
}: Readonly<{ pageType: string; children: React.ReactNode }>) {
  return (
    <div className="flex flex-col w-96 min-h-3/5 border rounded-xl shadow-2xl overflow-auto">
      <div className="flex shrink h-1/5 border rounded-t-xl inset-ring justify-items-center items-center overflow-clip">
        <h1 className="font-serif text-center text-2xl w-full">
          {pageType === PageType.Login ? "Login" : "Create an account"}
        </h1>
      </div>
      <div className="grow px-8 py-3 mb-4">{children}</div>
    </div>
  );
}
