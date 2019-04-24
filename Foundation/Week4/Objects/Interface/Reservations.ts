'use strict';

// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

export class Reservation implements Reservationy {
  getDowBooking(): string {
    const daysOfWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
  }
  getCodeBooking(): string {
    const charMap: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let bookingCode: string = '';
    for (let i = 0; i < 8; i++) {
      bookingCode += charMap[Math.floor(Math.random() * charMap.length)];
    }
    return bookingCode;
  }

  printReservation() {
    console.log(`Booking #${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}

let first = new Reservation();
first.printReservation();