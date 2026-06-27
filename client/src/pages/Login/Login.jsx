import babymochiwaving from "../../assets/babymochiwaving.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function Login() {
  return (
<div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center p-4">
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden grid lg:grid-cols-2">

    
    <div className="hidden lg:flex flex-col justify-center bg-[#F2E6DB] p-10">
      <h1 className="font-cinzel text-4xl text-[#4A3428]">
        Cresco
      </h1>

      <h2 className="mt-8 font-heritage text-5xl text-[#4A3428]">
        Welcome Back
      </h2>

      <p className="mt-4 font-source text-[#4A3428]/80">
        Your cozy AI recipe journal awaits.
      </p>

      <img
        src={babymochiwaving}
        alt="babymochi"
        className="mt-10 w-full max-w-sm mx-auto"
      />
    </div>

    
    <div className="p-8 md:p-12 flex flex-col justify-center">

      <h2 className="font-heritage text-4xl text-[#4A3428]">
        Login
      </h2>

      <p className="font-source text-[#4A3428]/70 mt-2">
        Welcome back! Sign in to continue.
      </p>

      <form className="mt-8 space-y-5">

        <div>
          <label className="font-source text-[#4A3428]">
            Email
          </label>

          <input
            type="email"
            className="w-full mt-2 rounded-xl border border-[#E7DDD2] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D0917F]"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="font-source text-[#4A3428]">
            Password
          </label>

          <input
            type="password"
            className="w-full mt-2 rounded-xl border border-[#E7DDD2] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D0917F]"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="font-source text-[#D0917F] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          className="w-full rounded-xl bg-[#D0917F] py-3 font-source text-[#4A3428] hover:text-white transition"
        >
          Login
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="font-source text-gray-500">
          or
        </span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      <button className="w-full border border-[#E7DDD2] rounded-xl py-3 flex items-center justify-center gap-3 hover:border-[#D0917F] transition">
        <FcGoogle />
        Continue with Google
      </button>

      <p className="mt-8 text-center font-source text-[#4A3428]">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-[#D0917F] hover:underline"
        >
          Sign Up
        </Link>
      </p>

    </div>

  </div>
</div>
 );
}

export default Login;