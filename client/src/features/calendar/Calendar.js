import React, { useState, useEffect } from 'react';
// components
import MonthAndYear from './MonthAndYear';
import AllDays from './AllDays';
import DayCardList from './DayCardList';
// Utility functions
// For getting real data
import DataService from "services/dataService";
import useDate from 'hooks/useDate';
import { getMatchMonthAndYear, getEventsByDayNumber } from 'utilities/calendar';
import { parse } from "date-fns";

const Calendar = () => {
  const date = useDate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const eventsInSelectedMonth = getMatchMonthAndYear(date.month, date.year, events);
  // An array of days containing events for populating the calendar
  const days = Array.from({ length: date.daysInMonth }, (_, i) => {
    const currentDay = i + 1;

    //Creates dateObject using month spelled out in a string, currentDay and year
    const dateObject = parse(`${date.month}, ${currentDay}, ${date.year}`, 'MMMM, d, yyyy', new Date())
    return {
      date: dateObject,
      events: getEventsByDayNumber(currentDay, eventsInSelectedMonth)
    }
  })

  useEffect(() => {
    setLoading(true);
    // Fetch events from server
    const fetch = async () => {
      // Database data from server
      const response = await DataService.getAll()
      setEvents(response.data);
    };

    fetch()
      .then(setLoading(false))
      .catch(setLoading(false))
  }, [])

  // Render nothing while fetching for data from server
  if (loading) return null;

  return (
    <div className="flex flex-grow w-screen h-screen overflow-auto text-gray-700">
      <div className="flex flex-col flex-grow">
        <MonthAndYear
          month={date.month}
          year={date.year}
          handleNextMonth={date.getNextMonth}
          handlePreviousMonth={date.getPreviousMonth}
        />
        <AllDays />
        <DayCardList data={days} firstDayOfMonth={date.firstDay} />
      </div>
    </div>
  );
};

export default Calendar;
