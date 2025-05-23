const PageType = {
  Login: "login",
  SignUp: "signup",
} as const;

//TODO #1 Finish creation of AuthWindow
export default function Window({ pageType }: { pageType: string }) {
  return (
    <div className="w-1/4 h-1/3 border rounded-xl shadow-2xl">
      <div>
        {pageType == PageType.Login ? <div>Login</div> : <div>Sign Up</div>}
      </div>
    </div>
  );
}
