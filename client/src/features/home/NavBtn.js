import { useRoutingContext } from "contexts/RoutingContext";

const NavBtn = ({ Icon }) => {
  const routing = useRoutingContext()
  return (
    <div className="flex overflow-hidden rounded-lg my-3">
      <button
        className="block text-white text-xs bg-navBtn py-3 px-3 font-sans tracking-wide uppercase font-bold "
        onClick={() => routing.setCurrentPage("calendarPage")}
      >
        Navigate to Calendar Page
      </button>
      <div class="bg-navBtnLight shadow-border p-3">
        <div class="w-4 h-4">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default NavBtn;
