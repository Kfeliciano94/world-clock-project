function updateTime() {
  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:m:ss [<small>]A</small>"
    );
  }
}
