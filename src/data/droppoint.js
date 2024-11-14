// src/data/dropPoints.js
import dropPointImage1 from "../assets/dp1.jpg";
import dropPointImage2 from "../assets/dp2.jpg";
import dpmap1 from "../assets/dpmap1.jpg";
// import dpmap2 from "../assets/dpmap2.jpg";
import recycleIcon from "../assets/recycle.svg";
import clockIcon from "../assets/clock.svg";
import trashIcon from "../assets/trash.svg";

const dropPoints = [
  {
    id: 1,
    name: "Central Station",
    distance: "300 m",
    duration: "4 min",
    open: "Open 24 hours",
    space: "30% of space available",
    image: dropPointImage1,
    icons: {
      recycle: recycleIcon,
      clock: clockIcon,
      trash: trashIcon,
    },
    map: dpmap1
  },
  {
    id: 2,
    name: "Hub Alam Sutera",
    distance: "100 m",
    duration: "2 min",
    open: "Open 24 hours",
    space: "21% of space available",
    image: dropPointImage2,
    icons: {
      recycle: recycleIcon,
      clock: clockIcon,
      trash: trashIcon,
    },
    map: dpmap1
  } 
];

export default dropPoints;