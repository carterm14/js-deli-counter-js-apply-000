//takes a line and a new person, returns "Welcome, {name}, you are number {index + 1} in line"
let ticketWheel = 1

const takeANumber = (line) => {
  //the person's position in line
  const position = ticketWheel
  ticketWheel++
  //adds the person to the line
  line.push(position)
  
  //returns a greeting
  return `Welcome, you are number ${position}`  
}




//takes a line and returns the first person in line.  If line is 0, return "There is nobody waiting to be served!"
const nowServing = (line) => {
  return line.length ? 
  "Currently serving " + line.shift() + "." : 
  "There is nobody waiting to be served!"
}

//takes a line, returns the line in the format "The line is currently: {position}. {name}, ..."
const currentLine = (line) => {
  let arr = []
  line.forEach((person, index) => {
    arr.push(` ${index + 1}. ${person}`)
  })
  return arr.length ? 
  "The line is currently:" + arr.join(",") :
  "The line is currently empty."
}