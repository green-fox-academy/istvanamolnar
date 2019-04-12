'use strict';

function humanReadable(seconds) {
  let hour = Math.floor(seconds/3600);
  let min = Math.floor((seconds/3600 - hour) * 60);
  let sec = seconds - (hour * 3600) - (min * 60);
  return `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}

// TASK:
//Write a function, which takes a non-negative integer (seconds) as input and 
//returns the time in a human-readable format (HH:MM:SS).
//
// Sample tests:
// humanReadable(0), '00:00:00';
// humanReadable(5), '00:00:05';
// humanReadable(60), '00:01:00';
// humanReadable(86399), '23:59:59';
// humanReadable(359999), '99:59:59';

