import React, { useState, useEffect } from 'react';
import { fetchAvailableTimeSlots, bookTimeSlot, fetchBookedTimeSlots } from '../api/apiService';

const TimeSlots = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Initial date today
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  useEffect(() => {
    loadAvailableTimeSlots();
    loadBookedTimeSlots();
  }, []);

  const loadAvailableTimeSlots = async () => {
    try {
      const data = await fetchAvailableTimeSlots(date);
      setAvailableSlots(data);
    } catch (error) {
      console.error('Error loading available time slots:', error);
    }
  };


  const loadBookedTimeSlots = async () => {
    try {
        const data = await fetchBookedTimeSlots(date);
        setBookedSlots(data);
      } catch (error) {
        console.error('Error loading available time slots:', error);
      }
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
    loadAvailableTimeSlots();
  };

  const handleBookSlot = async (slotId) => {
    const bookingDate = date; // Use selected date
    try {
      const bookingResponse = await bookTimeSlot(slotId, bookingDate);
      console.log('Booking successful:', bookingResponse);
      // Optionally update UI or show confirmation
      loadAvailableTimeSlots(); // Refresh available slots after booking
      loadBookedTimeSlots();
    } catch (error) {
      console.error('Error booking time slot:', error);
      // Handle error, show error message
    }
  };

  return (
    <div>
      <h2>Available Time Slots</h2>
      <label htmlFor="datePicker">Select Date:</label>
      <input type="date" id="datePicker" value={date} onChange={handleDateChange} />

      <ul>
        {availableSlots.map((slot) => (
          <li key={slot.slotId}>
            {slot.startTime} - {slot.endTime}
            <button onClick={() => handleBookSlot(slot.slotId)}>Book Slot</button>
          </li>
        ))}
      </ul>

      <ul>
         { bookedSlots && bookedSlots.map((slot) => (
          <li key={slot.slotId}>
            {slot.startTime} - {slot.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlots;
