#! /usr/bin/env node

//Task # 38
// Cities: write a function called describe_city() that accept the name of a city and its country. the function should print a
//Simple sentence, such as Karachi is in Pakistan.Give the parameter for the country a default value. call your function for
// Three different cities atleast one of which is not in the default country.



function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(` ${city} is in ${country}`)
}
describe_city('Karachi')  // Default sentence
describe_city('France', 'Europe')
describe_city('Lahore', 'Pakistan')