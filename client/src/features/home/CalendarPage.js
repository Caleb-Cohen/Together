import useDate from "hooks/useDate";
import Calendar from "../calendar/Calendar";
import CalendarHeader from "../calendarHeader";
import FormProvider from "contexts/FormContext";
import { useRoutingContext } from "contexts/RoutingContext";
import Modal from "features/modal/Modal";
import UserForm from "features/form/UserForm";
import { useAuthContext } from "contexts/AuthContext";

function CalendarPage() {
  const auth = useAuthContext();
  const date = useDate();

  return (
    <>
      <main className="flex flex-col gap-3 p-3 shadow-sm min-h-screen max-w-[1920px] mx-auto">
        <CalendarHeader date={date} />
        <Calendar date={date} />
      </main>
      <Modal type={"event"} open={"eventModal"} />
      {auth?.user && (
        <FormProvider>
          <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
            <UserForm />
          </div>
        </FormProvider>
      )}
    </>
  );
}
export default CalendarPage;
