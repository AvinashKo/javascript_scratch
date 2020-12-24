import moment from '/usr/local/lib/node_modules/moment/moment';

const DEFAULT_DATE_TIME_FORMAT = 'MMM DD, YYYY, HH:mm';
const VALIDITY_DATE_FORMAT = 'MMM DD, YYYY';
const BACKEND_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ssZ';
const RELEASE_TIMESTAMP_FORMAT = 'HH:mm, Do MMM';
const ROUTE_TIMESTAMP_FORMAT = 'MMM DD, HH:mm';
const RELEASE_DAY_FORMAT = 'Do MMM';
const ROUTE_DAY_FORMAT = 'MMM DD';
const RELEASE_TIME_FORMAT = 'HH:mm';

// date in load planner format
moment().format(); // ?

let inputDate = '2020-08-02T23:20:00-08:00';

moment(inputDate).format(); // ?

moment(inputDate).format(DEFAULT_DATE_TIME_FORMAT); // ?
moment(inputDate).format(VALIDITY_DATE_FORMAT) // ?
moment(inputDate).format(BACKEND_DATE_FORMAT) // ?
moment(inputDate).format(RELEASE_TIMESTAMP_FORMAT) // ?
moment(inputDate).format(ROUTE_TIMESTAMP_FORMAT) // ?
moment(inputDate).format(RELEASE_DAY_FORMAT) // ?
moment(inputDate).format(ROUTE_DAY_FORMAT) // ?
moment(inputDate).format(RELEASE_TIME_FORMAT) // ?

let format: string;
// no padding
format = 'D'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// day of the month
format = 'DD'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// day of the year
format = 'DDD'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// day in 'nth' format
format = 'Do'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// month format
format = 'M'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// month
format = 'MM'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// month - nth of
format = 'Mo'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// month in short form
format = 'MMM'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// month in full form
format = 'MMMM'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// year only two digits
format = 'YY'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// year with four digits
format = 'YYYY'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// year with sign + or -
format = 'Y'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// epoch
format = 'X'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
// epoch in milli seconds
format = 'x'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?

// hours
format = 'H'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'HH'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'h'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'hh'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'a'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'A'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'm'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'mm'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 's'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'ss'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'ss.SSS'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'Z'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?
format = 'ZZ'; moment(inputDate).format(format); /* ? */ typeof(moment(inputDate).format(format)) // ?

