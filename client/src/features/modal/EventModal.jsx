import React from "react";
import { GrCalendar } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { IoIosRepeat } from "react-icons/io";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { format, parseISO } from "date-fns";
import { formatToLocalTime } from 'utilities/calendar';
import togetherLogo from "../.././assets/images/togetherLogo.svg";
import { useModalContext } from "contexts/ModalContext";


const EventModal = ({ handleClose }) => {
  const modal = useModalContext();

  return (
    <div className="flex flex-col items-center py-0 px-2rem rounded-xl bg-white pb-4">
      <button
        className="w-auto h-12 mt-5 px-2 border-solid border-2 border-gray outline-none rounded font-semibold text-xl hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300"
        onClick={handleClose}
      >
        Close
      </button>
      <div className="w-4/6 mt-3 flex flex-col">
        <h2 className=" flex mb-1 border-solid border-b-2 border-black font-semibold">
          <img className="w-8 pr-2" src={togetherLogo} alt="" /> {modal.activeModal.title}
        </h2>
        <div className="dateTime">
          <section className="flex m-3 gap-1 font-semibold">
            <GrCalendar className="mt-1" />
            <span className="">Day:</span>{" "}
            <span>{format(parseISO(modal.activeModal.startAt), 'M')}/{format(parseISO(modal.activeModal.startAt), 'd')}/{format(parseISO(modal.activeModal.startAt), 'y')}</span>
          </section>

          <section className="flex m-3 gap-1 font-semibold">
            <FaRegClock className="mt-1" />
            <span className=" "> Starts: {formatToLocalTime(modal.activeModal.startAt)}</span>
            <span className="ml-9">Ends: {formatToLocalTime(modal.activeModal.endAt)}</span>
          </section>
        </div>
        <div className="description break-words w-auto min-h-20 my-2 p-2 border-solid border-black border-2 font-semibold rounded-xl bg-neutral-200/50">
          <p>Description: {modal.activeModal.description}</p>
        </div>
        <div>
          <section className="flex m-3 gap-1 font-semibold">
            <IoIosRepeat className="mt-1" />
            <span>
              Repeats:
              {modal.activeModal.recurring ? <div>{modal.activeModal.recurringPattern.days.join(', ')}, {modal.activeModal.recurringPattern.rate}</div> : <div>Does not repeat.</div>}
            </span>
          </section>
          <section className="flex m-3 gap-1 font-semibold">
            <IoLocationOutline className="mt-1" /> <span>Location: {modal.activeModal.location}</span>
          </section>
          <section className="flex m-3 gap-1 font-semibold">
              <IoPersonOutline className="mt-1" /> <span>Event Author: {modal.activeModal.discordName}</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
