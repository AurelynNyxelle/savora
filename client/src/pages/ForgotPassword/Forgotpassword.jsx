import { Link } from "react-router-dom";
import mochiwithenvelop from "../../assets/mochiwithenvelop.png";
function ForgotPassword () {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden grid lg:grid-cols-2">

       
        <div className="hidden lg:flex flex-col justify-center bg-[#F2E6DB] px-12 py-16">

          <h1 className="font-cinzel text-5xl text-[#4A3428]">
            Cresco
          </h1>

          <h2 className="font-heritage text-5xl text-[#4A3428] mt-8 leading-tight">
            Forgot Your
            <br />
            Password?
          </h2>

          <p className="font-source text-[#4A3428]/75 mt-5 text-lg">
            No worries. Enter your email and we'll send you a password
            reset link so you can get back to cooking.
          </p>

          <div className="mt-12 flex justify-center">
            <img
              src={mochiwithenvelop}
              alt="envelopmochi"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>

      
        <div className="flex items-center justify-center px-8 py-12 md:px-14">

          <div className="w-full max-w-md">

            <h2 className="font-heritage text-4xl text-[#4A3428]">
              Reset Password
            </h2>

            <p className="font-source text-[#4A3428]/70 mt-2">
              Enter the email associated with your account.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="block mb-2 font-source text-[#4A3428]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-[#E8DED4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D0917F]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#D0917F] py-3 font-source text-[#4A3428] hover:text-white transition"
              >
                Send Reset Link
              </button>

            </form>

            <p className="mt-8 text-center font-source text-[#4A3428]">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-[#D0917F] font-semibold hover:underline transition"
              >
                Back to Login
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;