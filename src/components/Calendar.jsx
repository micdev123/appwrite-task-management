import { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderCalendar = () => {
    // Logic to generate calendar UI goes here
    // You can use libraries like Moment.js or Date-fns for date manipulation

    // Example: rendering a simple calendar with days of the week
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const calendarDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      calendarDays.push(
        <div
          key={i}
          className={`calendar-day ${selectedDate === date ? 'selected' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }

    return (
      <div className="calendar">
        <div className="calendar-header">
          <h2>{`${monthsOfYear[currentMonth]} ${currentYear}`}</h2>
        </div>
        <div className="calendar-days-of-week flex justify-between">
          {daysOfWeek.map((day) => (
            <div key={day} className="calendar-day-of-week flex">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-dates grid grid-cols-6">{calendarDays}</div>
      </div>
    );
  };

  return <div>{renderCalendar()}</div>;
};

export default Calendar;
