var signal = "yellow";

switch (signal) {
  case "red": {
    console.log("stop");
    break;
  }

  case "yellow":{
    console.log("Slow Down");
    break;}
  case "green":{
    console.log("Go...");
    break;}

  default:
    console.log("Invalid input");
}
