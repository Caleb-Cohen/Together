import HeaderButton from "./components/HeaderButton";
import { MdGroupAdd } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsCalendarPlusFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import MonthAndYear from "features/calendar/MonthAndYear";
import Logo from "../../assets/images/togetherLogo.svg";
import { useAuthContext } from "contexts/AuthContext";

function CalendarHeader({ date }) {
  const { isAuthenticated, logout } = useAuthContext();
  const TOGETHER_THREAD_URL =
    "discord://discord.com/channels/735923219315425401/1038482732633825442";

  const handleLogin = () => {
    window.location = "/auth/discord";
  };

  return (
    <header className="flex items-center px-5 py-2 bg-white justify-between">
      <section className="flex space-x-3">
        <HeaderButton Icon={BsCalendarPlusFill} tooltipText="Add Event" />
        <HeaderButton
          Icon={MdGroupAdd}
          tooltipText="Join Team"
          onClick={() => window.open(TOGETHER_THREAD_URL, "_blank")}
        />
      </section>
      <section className="flex items-center">
        <img src={Logo} className="w-14" alt="Logo" />
        <MonthAndYear
          month={date?.month}
          year={date?.year}
          handleNextMonth={date?.getNextMonth}
          handlePreviousMonth={date?.getPreviousMonth}
        />
      </section>
      <section className="flex space-x-3">
        <HeaderButton Icon={IoChatbubblesOutline} tooltipText="Feedback" />
        <HeaderButton Icon={FaQuestion} tooltipText="Help" />
        {isAuthenticated() ? (
          <HeaderButton
            Icon={RiArrowLeftCircleFill}
            tooltipText="Logout"
            onClick={logout}
          />
        ) : (
          <HeaderButton
            Icon={RiArrowRightCircleFill}
            tooltipText="Login"
            onClick={handleLogin}
          />
        )}
      </section>
    </header>
  );
}
export default CalendarHeader;
