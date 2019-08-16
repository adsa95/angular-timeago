'use strict';

angular.module('yaru22.angular-timeago').constant('timeAgoSettings', {
  refreshMillis: 1000,
  allowFuture: false,
  overrideLang: null,
  fullDateAfterSeconds: null,
  defaultFormat: 'yyyy-MM-dd',
  strings: {},
  breakpoints: {
    secondsToMinute: 60, // in seconds
    secondsToMinutes: 120, // in seconds
    minutesToHour: 60, // in minutes
    minutesToHours: 90, // in minutes
    hoursToDay: 24, // in hours
    hoursToDays: 48, // in hours
    daysToMonth: 30, // in days
    daysToMonths: 60, // in days
    daysToYear: 365, // in days
    yearToYears: 2 // in year
  }
});
