/*
* @params String dateStr
* Input 2020-12-28
* @return String
* Output December 2020
*/
const getMonthYear = dateStr => new Date(dateStr).toLocaleString('en-us', { month: 'long', year: 'numeric' });

export {
  getMonthYear
};
