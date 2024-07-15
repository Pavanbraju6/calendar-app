import axios from 'axios';

const API_BASE_URL = 'https://localhost:7225/api';  // Replace with your ASP.NET 6 API base URL
//https://localhost:7225/api/TimeSlots/available?date=2024.07.15
//http://localhost:7225/api/TimeSlots/available?date=2024-07-14
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAvailableTimeSlots = async (date) => {
  try {
    const response = await apiClient.get(`/TimeSlots/available?date=${date}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching available time slots:', error);
    throw error;
  }
};

export const fetchBookedTimeSlots = async (date) => {
    try {
      const response = await apiClient.get(`/TimeSlots/booked?date=${date}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching available time slots:', error);
      throw error;
    }
  };

export const bookTimeSlot = async (slotId, bookingDate) => {
  try {
    const response = await apiClient.post('/timeslots/book', {
      slotId: slotId,
      bookingDate: bookingDate,
    });
    return response.data;
  } catch (error) {
    console.error('Error booking time slot:', error);
    throw error;
  }
};
