// import React, { useState, useEffect } from 'react';
// import { fetchAvailableSelectSlots } from '../api/apiService';

// const SelectSlots = () => {
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Initial date today
//   const [availableSlots, setAvailableSlots] = useState([]);
//   const [bookedSlots, setBookedSlots] = useState([]);

//   useEffect(() => {
//     loadSelectSlots();
//   }, []);

//   const loadSelectSlots = async () => {
//     try {
//       const data = await fetchAvailableSelectSlots(date);
//       setAvailableSlots(data.filter(slot => slot.available));
//       setBookedSlots(data.filter(slot => !slot.available));
//     } catch (error) {
//       console.error('Error loading time slots:', error);
//     }
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//     loadSelectSlots();
//   };
//   const handleBookSlot = async (slotId) => {
//     const bookingDate = date; // Use selected date
//     try {
//     //   const bookingResponse = await bookTimeSlot(slotId, bookingDate);
//     //   console.log('Booking successful:', bookingResponse);
//     //   // Optionally update UI or show confirmation
//     //   loadTimeSlots(); // Refresh available slots after booking
//     } catch (error) {
//       console.error('Error booking time slot:', error);
//       // Handle error, show error message
//     }
//   };

//   return (
//     <div>
//       <h2>Time Slots</h2>
//       <label htmlFor="datePicker">Select Date:</label>
//       <input type="date" id="datePicker" value={date} onChange={handleDateChange} />

//       <div>
//         <h3>Available Slots</h3>
//         <ul>
//           {availableSlots.map((slot) => (
//             <li key={slot.slotId}>
//               {slot.startTime} - {slot.endTime}
//               <button onClick={() => handleBookSlot(slot.slotId)}>Book Slot</button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h3>Booked Slots</h3>
//         <ul>
//           {bookedSlots.map((slot) => (
//             <li key={slot.slotId}>
//               {slot.startTime} - {slot.endTime}
//               <span>Booked</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SelectSlots;
