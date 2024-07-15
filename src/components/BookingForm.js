import React, { useState } from 'react';
import { bookTimeSlot } from '../api/apiService';

const BookingForm = () => {
  const [slotId, setSlotId] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleBookSlot = async () => {
    try {
      const bookingResponse = await bookTimeSlot(slotId, bookingDate);
      console.log('Booking successful:', bookingResponse);
      // Optionally update UI or show confirmation
    } catch (error) {
      console.error('Error booking time slot:', error);
      // Handle error, show error message
    }
  };

  return (
    <div>
      <h2>Book Time Slot</h2>
      <label htmlFor="slotIdInput">Slot ID:</label>
      <input type="text" id="slotIdInput" value={slotId} onChange={(e) => setSlotId(e.target.value)} />

      <label htmlFor="bookingDateInput">Booking Date:</label>
      <input type="date" id="bookingDateInput" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />

      <button onClick={handleBookSlot}>Book Slot</button>
    </div>
  );
};

export default BookingForm;
