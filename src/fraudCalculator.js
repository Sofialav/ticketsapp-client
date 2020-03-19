import moment from "moment";

export const fraudCalc = () => {
  let x = 0;
  // price deduction WIP
  let avgPrice = 20; //function call
  const ticketPrice = this.props.ticket.price;
  let priceDeduction = (ticketPrice / avgPrice - 1) * 100;
  if (priceDeduction < 0) {
    x += Math.abs(priceDeduction);
  } else if (priceDeduction > 0 && priceDeduction <= 10) {
    x -= priceDeduction;
  } else x -= 10;
  // time deduction
  let creationTime = parseInt(moment(this.props.ticket.createdAt).format("H"));
  if (creationTime >= 9 && creationTime < 17) {
    x -= 10;
  } else x += 10;
  // ticket numbers deduction
  // WIP
  // let userTickets = Object.keys(this.props.event.tickets).length;
  // console.log("tickets quo", userTickets);
  // if (userTickets === 1) {
  //   x += 10;
  // }
  // comments deduction WIP
  console.log("checking", this.props.event);
  if (x < 5) {
    x = 5;
  } else if (x > 95) {
    x = 95;
  }
  return x;
};
