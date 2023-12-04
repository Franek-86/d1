import { BsDoorOpenFill } from "react-icons/bs";
import { BsDoorOpen } from "react-icons/bs";
import { BsBuildingLock } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import { BsBatteryCharging } from "react-icons/bs";
import { BsConeStriped } from "react-icons/bs";

export const allItems = [
  {
    id: 1,
    text: "portone esterno",
    icon: <BsDoorOpen className='card__icon__logo' />,
  },
  {
    id: 2,
    text: "portone interno",
    icon: <BsDoorOpenFill className='card__icon__logo' />,
  },
  {
    id: 3,
    text: "porta ingresso",
    icon: <BsBuildingLock className='card__icon__logo' />,
  },
  {
    id: 4,
    text: "ricarica serratura",
    icon: <BsBatteryCharging className='card__icon__logo' />,
  },
  {
    id: 5,
    text: "generale",
    icon: <BsLightningChargeFill className='card__icon__logo' />,
  },
  {
    id: 6,
    text: "non si vede",
    icon: <BsConeStriped className='card__icon__logo' />,
  },
  {
    id: 7,
    text: "non si vede",
    icon: <BsConeStriped className='card__icon__logo' />,
  },
];
