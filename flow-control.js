function basicTeenager(age) {
  if (13 <= age && age <=19) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  //(13 <= age) && (age <= 19) ? "You are a teenager!" : "You are not a teenager"
  if (13 <= age && age <=19) {
    return "You are a teenager!"
  }else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (13 <= age && age <=19) {
    return "You are a teenager!"
  }else if (age <=12) {
    return "You are a kid"
  }else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  ((13 <= age) && (age <= 19)) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  ((13 <= age) && (age <= 19)) ? "You are a teenager" : "You have an age"
}
