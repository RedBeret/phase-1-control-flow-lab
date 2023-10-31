function scuberGreetingForFeet(rideDist) {
  if (rideDist <= 400) {
    return "This one is on me!";
  } else if (rideDist <= 2000 && rideDist >= 400) {
    return "That will be twenty bucks.";
  } else if (rideDist >= 2000 && rideDist <= 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do.";
  }
}

//ternary is amazing how it condenses
function ternaryCheckCity(city) {
  return city == "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tipSize) {
  if (tipSize === 'generous') {
    return "Thank you so much."
  } else if (tipSize === 'not as generous') {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}

//this is a switch conversion
function switchOnCharmFromTip(tipSize) {
  switch (tipSize) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
