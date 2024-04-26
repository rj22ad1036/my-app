import { signIn } from "@/auth.js";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        className="py-2 px-4 bg-blue-400 w-72 text-white border-2 border-black rounded-md "
        type="submit"
      >
        Login with Google
      </button>
    </form>
  );
}
