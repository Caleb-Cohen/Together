import React from "react";
import { formatToLocalTime } from "utilities/calendar";
import { useModalContext } from "contexts/ModalContext";

const Event = props => {
  const modal = useModalContext();
  const confirmedCss = "bg-gray-500";
  const unconfirmedCSss = "border border-gray-500";
  return (
    <button
      onClick={() => {
        modal.setActiveModal(props.event);
        modal.handleOpen();
      }}
      key={props.event.title}
      className="flex items-center flex-shrink-0 h-5 px-1 text-sm hover:bg-gray-200"
    >
      <span
        className={`flex-shrink-0 w-2 h-2 ${
          props.event.confirmed ? confirmedCss : unconfirmedCSss
        } rounded-full`}
      ></span>
      <span className="ml-2 font-light leading-none">
        {formatToLocalTime(props.event.startAt)}
      </span>
      <span className="ml-2 font-medium leading-none truncate">
        {props.event.title}
      </span>
    </button>
  );
};

export default Event;
