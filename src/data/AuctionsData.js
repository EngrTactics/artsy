import auction1 from "../images/auction1.jpeg";
import auction2 from "../images/auction2.jpeg";
import auction3 from "../images/auction3.jpeg";
import bid1 from "../images/bid1.jpeg";
import bid2 from "../images/bid2.jpeg";
const auctionsData = {
  products: [
    {
      id: 1,
      url: auction1,
      time: {
        hr: 6,
        min: 40,
        sec: 15,
      },
    },
    {
      id: 2,
      url: auction2,
      time: {
        hr: 22,
        min: 40,
        sec: 45,
      },
    },
    {
      id: 3,
      url: auction3,
      time: {
        hr: 10,
        min: 25,
        sec: 0,
      },
    },
  ],
  bids: [
    {
      id: 1,
      name: "out of the box",
      creator: "dan murray",
      date: {
        day: 12,
        month: 8,
        year: 22,
      },
      bid: {
        current: {
          eth: 0.987,
        },
        highest: {
          eth: 0.57,
        },
      },
      url: bid1,
    },
    {
      id: "ab1",
      name: "falling apart",
      creator: "jacob banks",
      date: {
        day: 12,
        month: 8,
        year: 22,
      },
      bid: {
        current: {
          eth: 0.99,
        },
        highest: {
          eth: 0.34,
        },
      },
      url: bid2,
    },
  ],
};

export default auctionsData;
