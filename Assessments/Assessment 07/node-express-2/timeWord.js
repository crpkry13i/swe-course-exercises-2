const timeWord = (str) => {
  str = str.split(":"); //<-- splits the string at ":"
  let hour = str[0]; //<-- first part of split is hour
  let minutes = str[1].split(""); //<-- splits second part into 2 numbers

  // Save output to array
  const output = []; //<-- save final time in words

  // Make an object with words corresponding to numbers
  const hourWords = {
    0: "twelve",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
  };

  const minuteWords = {
    0: "oh",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fivteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
  };

  // "+" symbol converts the string number into integer
  // if hour == 00 and minutes.join == 00
  if (+hour === 0 && +minutes.join("") === 0) {
    return "midnight"; //<-- return 'midnight'

    // if hour == 12 and minutes.join == 00
  } else if (+hour === 12 && +minutes.join("") === 0) {
    return "noon"; //<-- return 'noon'
  }

  // #### FIX HOURS ####
  // if hours below 12
  if (+hour < 12) {
    output.push(hourWords[+hour]); //<-- add hours to output
  } else {
    output.push(hourWords[+hour - 12]); //<-- if above 12, subtract 12 to get it below 12
  }
  // output.push(+hour < 12 ? hourWords[+hour] : hourWords[+hour - 12]) <-- short form

  // if minutes joined total to 0
  if (+minutes.join("") === 0) {
    output.push("o'clock"); //<-- return "O'Clock"

    // #### FIX MINUTES ####
    // if first digit of minute == 1
  } else if (minutes[0] === "1") {
    minutes = +minutes.join(""); //<-- remove the space and concat the next number
    output.push(minuteWords[minutes]); //<-- add the value of the key of minWords
  } else {
    // if first digit of minute == multiplies by ten
    minutes[0] = +minutes[0] * 10;
    minutes[1] = +minutes[1]; //<-- second digit
    output.push(minuteWords[minutes[0]]); //<-- add the value of the first digit of minWords
    if (minutes[1] !== 0) output.push(minuteWords[minutes[1]]); //<-- if second digit is not 0
    // add the second digit as value of minWords
  }

  // if hour is below 12, set to "AM"
  if (+hour < 12) {
    output.push("am");
  } else {
    // if hour is above 12, set to "PM"
    output.push("pm");
  }

  // output.push(+hour < 12 ? 'am' : 'pm') <-- or short form
  console.log(output);
  return output.join(" ");
};

module.exports = timeWord;
