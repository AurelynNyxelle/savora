import MainLayout from "../../layouts/MainLayout";
import { FiEdit2, FiLock, FiSave } from "react-icons/fi";
function Profile() {
  return (
    <MainLayout>
      <div
        className="
        max-w-5xl
        mx-auto
        bg-[#E8DED4]
        border
        border-[#8A8077]
        rounded-3xl
        p-8
        "
      >
        <h1
          className="
          text-3xl
          font-tai
          font-bold
          text-[#5B4A3E]
          mb-8
          "
        >
          My Profile
        </h1>


       <div className="flex items-start mb-8">
       <div className="flex flex-col items-center">
       <div className="w-36 h-36 rounded-full bg-[#D9D9D9]" />
    
    <button className="
      mt-4
      w-36 py-2
      bg-[#5B4A3E]
      text-white
      rounded-xl
      active:scale-95
      transition-all
    ">
      Upload Picture
    </button>
  </div>

  <div className="font-source text-[#5B4A3E] flex-1 max-w-2xl ml-16 mt-5">
    <div>
      <label>Username</label>
      <input
  type="text"
  placeholder="SavoraChef"
  className="
    w-full
    mt-2
    p-3
    rounded-xl
    border
    border-[#8A8077]
    bg-white"/>
    </div>

    <div className="font-source text-[#5B4A3E] mt-5">
      <label>Email</label>
      <input
  type="email"
  placeholder="chef@savora.com"
  className="
    w-full
    mt-2
    p-3
    rounded-xl
    border
    border-[#8A8077]
    bg-white"/>
    </div>

          <div className="font-source text-[#5B4A3E] mt-5">
            <label className="font-source text-[#5B4A3E]">
              Bio
            </label>

            <textarea
              placeholder="Tell us something about yourself..."
              className="
              w-full
              h-24
              mt-2
              p-4
              rounded-xl
              border
              border-[#8A8077]"
            />
            </div>
          </div>
        </div>


        <div className="mt-10">
          <h2
            className="
            font-tai
            text-2xl
            font-bold
            text-[#5B4A3E]
            mb-4
            "
          >
            Cooking Stats
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div
              className="
              bg-[#F6F2EB]
              rounded-2xl
              p-4
              border
              border-[#8A8077]
              text-center
              "
            >
              <p className="text-sm font-source">
                🔥 Streak
              </p>

              <h3 className="text-xl font-bold">
                12 Days
              </h3>
            </div>

            <div
              className="
              bg-[#F6F2EB]
              rounded-2xl
              p-4
              border
              border-[#8A8077]
              text-center
              "
            >
              <p className="text-sm font-source">
                📖 Recipes
              </p>

              <h3 className="text-xl font-bold">
                24
              </h3>
            </div>

            <div
              className="
              bg-[#F6F2EB]
              rounded-2xl
              p-4
              border
              border-[#8A8077]
              text-center
              "
            >
              <p className="text-sm font-source">
                🤖 AI Recipes
              </p>

              <h3 className="text-xl font-bold">
                8
              </h3>
            </div>

            <div
              className="
              bg-[#F6F2EB]
              rounded-2xl
              p-4
              border
              border-[#8A8077]
              text-center
              "
            >
              <p className="text-sm font-source">
                🍛 Favorite Cuisine
              </p>

              <h3 className="text-xl font-bold">
                Indian
              </h3>
            </div>

          </div>
        </div>


        <div className="mt-10">
          <h2
            className="
            font-tai
            text-2xl
            font-bold
            text-[#5B4A3E]
            mb-4
            "
          >
            Appearance
          </h2>

          <div className="flex gap-4">

    <button
      className="
      px-6
      py-3
      rounded-xl
      bg-[#5B4A3E]
      text-white
      font-source
      hover:bg-[#D0917F]
      hover:shadow-lg
      hover:-translate-y-1
      active:scale-95
      transition-all
      duration-300
      "
    >
      ☀️ Light Theme
    </button>

    <button
      className="
      px-6
      py-3
      rounded-xl
      bg-[#F6F2EB]
      text-[#5B4A3E]
      border
      border-[#8A8077]
      font-source
      hover:bg-[#D0917F]
      hover:text-white
      hover:shadow-lg
      hover:-translate-y-1
      active:scale-95
      transition-all
      duration-300
      "
    >
      🌙 Dark Theme
    </button>

  </div>
</div>



        <div className="mt-10">
          <h2
            className="
            font-tai
            text-2xl
            font-bold
            text-[#5B4A3E]
            mb-4
            "
          >
            Security
          </h2>

          <button
            className="
            px-5
            py-3
            rounded-xl
            border
            bg-[#F6F2EB]
            active:scale-95
            border-[#8A8077]
            hover:bg-[#D0917F]
            transition-all
            "
          >
            <FiLock className="inline mr-2" />
            Change Password
          </button>
        </div>



        <div className="flex gap-4 mt-10">

          <button
            className="
            flex-1
            py-3
            rounded-xl
            border-2
            border-[#8A8077]
            text-[#5B4A3E]
            hover:bg-[#F6F2EB]
            hover:shadow-lg
            hover:-translate-y-1
            active:scale-95
            transition-all
            duration-300
            "
          >
            <FiEdit2 className="inline mr-2" />
            Edit Profile
          </button>

          <button
            className="
            flex-1
            py-3
            rounded-xl
            bg-[#5B4A3E]
            text-white
            hover:bg-[#D0917F]
            hover:shadow-lg
            hover:-translate-y-1
            active:scale-95
            transition-all
            duration-300
            "
          >
            <FiSave className="inline mr-2" />
            Save Changes
          </button>

        </div>

      </div>
    </MainLayout>
  );
}

export default Profile;
