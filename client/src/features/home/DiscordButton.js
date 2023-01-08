import "../../index.css";
import LoginWithDiscord from "features/auth/LoginWithDiscord";

const DiscordButton = () => (
  <>
    <div className=" flex -mx-10 border-2 border-slate-400 bg-[#b5c8d3] py-[0.1px] rounded">
      <div className="md:px-10 px-2 py-1 my-3 mx-auto bg-discordBtn rounded text-base font-bold">
        <LoginWithDiscord />
      </div>
    </div>
  </>
);

export default DiscordButton;
