import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import babymochireminder from "../../assets/babymochireminder.png";
function Signup() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden grid lg:grid-cols-2">

      
        <div className="hidden lg:flex flex-col justify-center bg-[#F2E6DB] px-12 py-16">

          <h1 className="font-cinzel text-5xl text-[#4A3428]">
            Cresco
          </h1>

          <h2 className="font-heritage text-5xl text-[#4A3428] mt-8 leading-tight">
            Start Your
            <br />
            Culinary Journey
          </h2>

          <p className="font-source text-[#4A3428]/75 mt-5 text-lg">
            Save recipes, organize your favourites,
            generate dishes with AI and create your own
            beautiful digital cookbook.
          </p>

         
            <img
              src={babymochireminder}
              alt="babymochi"
              className="w-80"
            />

        </div>

        

        <div className="flex items-center justify-center px-8 py-12 md:px-14">

          <div className="w-full max-w-md">

            <h2 className="font-heritage text-4xl text-[#4A3428]">
              Create Account
            </h2>

            <p className="font-source text-[#4A3428]/70 mt-2">
              Join Cresco and begin collecting your favourite recipes.
            </p>

            <form className="mt-8 space-y-5">

              

              <div>
                <label className="block mb-2 font-source text-[#4A3428]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-[#E8DED4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D0917F]"
                />
              </div>

              

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

              

              <div>
                <label className="block mb-2 font-source text-[#4A3428]">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-2xl border border-[#E8DED4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D0917F]"
                />
              </div>

        

              <div>
                <label className="block mb-2 font-source text-[#4A3428]">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-2xl border border-[#E8DED4] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D0917F]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#D0917F] py-3 font-source text-[#4A3428] transition hover:text-white"
              >
                Create Account
              </button>

            </form>

            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="px-4 font-source text-gray-500">
                or continue with
              </span>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button className="w-full rounded-2xl border border-[#E8DED4] py-3 flex items-center justify-center gap-3 hover:border-[#D0917F] transition">
              {<FcGoogle size={22} /> }
              <span className="font-source">
                Continue with Google
              </span>
            </button>
 <p className="mt-8 text-center font-source text-[#4A3428]">
              Already have an account?{" "}
             <Link 
             to="/login"
                type="button"
                className="text-[#D0917F] font-semibold hover:underline transition"
              >
                Login
                </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
export default Signup;