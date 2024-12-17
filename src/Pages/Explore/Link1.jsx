import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

// Calendar Component
const Calendar = ({ currentMonth, setCurrentMonth, events, setEvents }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");

  // Generate days for the current month
  const generateDays = () => {
    const startOfMonth = currentMonth.startOf("month");
    const endOfMonth = currentMonth.endOf("month");
    const days = [];

    // Empty cells before the first day of the month
    for (let i = 0; i < startOfMonth.day(); i++) {
      days.push(null);
    }
    // Actual days of the month
    for (let i = 1; i <= endOfMonth.date(); i++) {
      days.push(i);
    }
    return days;
  };

  const daysInMonth = generateDays();

  // Function to filter events for a specific day
  const getEventsForDay = (day) => {
    const dateString = currentMonth.date(day).format("YYYY-MM-DD");
    return events.filter((event) => event.date === dateString);
  };

  // Handle booking a new event
  const handleBookEvent = () => {
    if (newEventTitle && selectedDay) {
      const newEvent = {
        date: currentMonth.date(selectedDay).format("YYYY-MM-DD"),
        title: newEventTitle,
      };
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, newEvent];
        localStorage.setItem("events", JSON.stringify(updatedEvents)); // Save to localStorage
        return updatedEvents;
      });
      setNewEventTitle("");
      setSelectedDay(null);
    }
  };

  return (
    <div className="bg-[#ebebeb] p-4 rounded w-full">
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          className="px-3 py-1 bg-[#283A2C] text-[#FFFFFF] rounded hover:bg-[#1E2B1F] transition"
        >
          Prev
        </button>
        <h2 className="text-xl font-bold text-[#283A2C]">
          {currentMonth.format("MMMM YYYY")}
        </h2>
        <button
          onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          className="px-3 py-1 bg-[#283A2C] text-[#FFFFFF] rounded hover:bg-[#1E2B1F] transition"
        >
          Next
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 text-center font-semibold text-[#283A2C]">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center mt-2 py-2">
        {daysInMonth.map((day, idx) => {
          const eventsForDay = day ? getEventsForDay(day) : [];
          return (
            <div
              key={idx}
              className={`h-20 border  flex flex-col items-center justify-start p-1  pt-2 bg-white rounded-md cursor-pointer ${
                day ? "bg-[#f1EFEC] hover:bg-[#DADDC5]" : "bg-transparent"
              }`}
              onClick={() => day && setSelectedDay(day)}
            >
              {/* Day Number */}
              <div className="font-bold text-[#283A2C]">{day || ""}</div>
              {/* Display Events */}
              {eventsForDay.map((event, index) => (
                <div
                  key={index}
                  className="text-xs bg-[#283A2C] text-[#FFFFFF] rounded p-1 mt-1 w-full truncate"
                >
                  {event.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Modal for Booking Event */}
      {selectedDay && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#FFFFFF] p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#283A2C]">
              Book Event
            </h3>
            <p className="mb-4 text-[#283A2C]">
              Selected Date:{" "}
              <strong>
                {currentMonth.date(selectedDay).format("YYYY-MM-DD")}
              </strong>
            </p>
            <input
              type="text"
              placeholder="Event Title"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="w-full border p-2 mb-4 rounded border-[#283A2C]"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setSelectedDay(null)}
                className="px-4 py-2 bg-[#f1EFEC] text-[#283A2C] rounded hover:bg-[#DADDC5]"
              >
                Cancel
              </button>
              <button
                onClick={handleBookEvent}
                className="px-4 py-2 bg-[#283A2C] text-[#FFFFFF] rounded hover:bg-[#1E2B1F]"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Link1 = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : []; // Load events from localStorage
  });

  return (
    <section className="bg-[#f5f5f5] w-full">
      <div className="bg-[#f1EFEC] min-h-screen">
        <div className="container mx-auto px-4 py-12 lg:px-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#283A2C]">
              Events Calendar
            </h1>
            <p className="text-[#283A2C] mt-2">
              Stay updated on our upcoming cultural events and heritage tours.
            </p>
          </div>

          {/* Events Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="group bg-[#FFFFFF] shadow-md rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9]">
              <h3 className="text-xl font-semibold mb-2 text-[#283A2C] group-hover:text-[#4CAF50] transition-colors duration-300">
                Heritage Walks
              </h3>
              <p className="text-[#283A2C] group-hover:text-[#555] transition-colors duration-300">
                Join us for insightful heritage walks that showcase the
                historical significance of cultural landmarks.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#FFFFFF] shadow-md rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9]">
              <h3 className="text-xl font-semibold mb-2 text-[#283A2C] group-hover:text-[#4CAF50] transition-colors duration-300">
                Art Exhibitions
              </h3>
              <p className="text-[#283A2C] group-hover:text-[#555] transition-colors duration-300">
                Experience the vibrant art scene with our curated art
                exhibitions featuring local artists.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#FFFFFF] shadow-md rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9]">
              <h3 className="text-xl font-semibold mb-2 text-[#283A2C] group-hover:text-[#4CAF50] transition-colors duration-300">
                Local Workshops
              </h3>
              <p className="text-[#283A2C] group-hover:text-[#555] transition-colors duration-300">
                Participate in our local workshops to learn traditional crafts
                and practices from skilled artisans.
              </p>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-[#ebebeb] p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-semibold text-center text-[#283A2C] mb-6">
              Calendar
            </h2>
            <Calendar
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
              events={events}
              setEvents={setEvents}
            />
          </div>

          {/* Interactive Workshops Section */}
          <div className="bg-white text-[#333] p-8 mt-12 rounded-lg shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold">Interactive Workshops</h2>
              <p className="text-lg mt-2">
                Join our interactive workshops designed to deepen your
                understanding of cultural heritage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-[#ffffff] text-[#333] shadow-md rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9]">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#283A2C] transition-colors duration-300">
                  Cultural Seminars
                </h3>
                <p className="group-hover:text-[#555] transition-colors duration-300">
                  Learn traditional craftsmanship techniques passed down through
                  generations in our specialized classes.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#ffffff] text-[#283A2C] shadow-md rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9]">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#283A2C] transition-colors duration-300">
                  Language Lessons
                </h3>
                <p className="group-hover:text-[#555] transition-colors duration-300">
                  Explore the depths of culture through enlightening seminars on
                  various cultural aspects.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-[#ffffff] text-[#283A2C] shadow-md rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9]">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#283A2C] transition-colors duration-300">
                  Cooking Demos
                </h3>
                <p className="group-hover:text-[#555] transition-colors duration-300">
                  Enhance your cultural understanding with language lessons that
                  teach local dialects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Link1;
