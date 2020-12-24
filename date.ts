
//
// javascript native date functions support date representation only in UTC and local timezones, input can have a timezone but date-time would be converted to localtime zone
//

// get current date

{
  let date = new Date(); // ?
  date.toString(); // ?
  date.toISOString(); // ?
  date.toUTCString(); // ?
  date.getTime(); // ?
  date.valueOf(); // ?
  date.getTimezoneOffset(); // ?

  date.getDate(); // ?
  date.getMonth(); // ?
  date.getFullYear(); // ?
  date.getDay(); // ?
  date.getHours(); // ?
  date.getMinutes(); // ?
  date.getSeconds(); // ?
  date.getMilliseconds(); // ?

  date.getUTCDate(); // ?
  date.getUTCMonth(); // ?
  date.getUTCFullYear(); // ?
  date.getUTCDay(); //?
  date.getUTCHours(); //?
  date.getUTCMinutes(); //?
  date.getUTCSeconds(); //?
  date.getUTCMilliseconds(); //?
}


// get date with negative tz offset

{
  let date = new Date('August 19, 1975 23:15:30 GMT-07:00');

  date.toString(); // ?
  date.toISOString(); // ?
  date.toUTCString(); // ?
  date.getTime(); // ?
  date.valueOf(); // ?
  date.getTimezoneOffset(); // ?

  date.getDate(); // ?
  date.getMonth(); // ?
  date.getFullYear(); // ?
  date.getDay(); // ?
  date.getHours(); // ?
  date.getMinutes(); // ?
  date.getSeconds(); // ?
  date.getMilliseconds(); // ?

  date.getUTCDate(); // ?
  date.getUTCMonth(); // ?
  date.getUTCFullYear(); // ?
  date.getUTCDay(); //?
  date.getUTCHours(); //?
  date.getUTCMinutes(); //?
  date.getUTCSeconds(); //?
  date.getUTCMilliseconds(); //?
}


// get date with positive tz offset

{
  let date = new Date('August 19, 1975 23:15:30 GMT+07:00');

  date.toString(); // ?
  date.toISOString(); // ?
  date.toUTCString(); // ?
  date.getTime(); // ?
  date.valueOf(); // ?
  date.getTimezoneOffset(); // ?

  date.getDate(); // ?
  date.getMonth(); // ?
  date.getFullYear(); // ?
  date.getDay(); // ?
  date.getHours(); // ?
  date.getMinutes(); // ?
  date.getSeconds(); // ?
  date.getMilliseconds(); // ?

  date.getUTCDate(); // ?
  date.getUTCMonth(); // ?
  date.getUTCFullYear(); // ?
  date.getUTCDay(); //?
  date.getUTCHours(); //?
  date.getUTCMinutes(); //?
  date.getUTCSeconds(); //?
  date.getUTCMilliseconds(); //?
}

// date in Load planner format

{
  let date = new Date('2020-12-22T21:20:00-08:00');

  date.toString(); // ?
  date.toISOString(); // ?
  date.toUTCString(); // ?
  date.getTime(); // ?
  date.valueOf(); // ?
  date.getTimezoneOffset(); // ?

  date.getDate(); // ?
  date.getMonth(); // ?
  date.getFullYear(); // ?
  date.getDay(); // ?
  date.getHours(); // ?
  date.getMinutes(); // ?
  date.getSeconds(); // ?
  date.getMilliseconds(); // ?

  date.getUTCDate(); // ?
  date.getUTCMonth(); // ?
  date.getUTCFullYear(); // ?
  date.getUTCDay(); //?
  date.getUTCHours(); //?
  date.getUTCMinutes(); //?
  date.getUTCSeconds(); //?
  date.getUTCMilliseconds(); //?
}
