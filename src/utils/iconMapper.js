import { FaOilCan, FaSyringe, FaBusinessTime } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { SiEducative } from "react-icons/si";
import { MdPermMedia } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { GoLaw } from "react-icons/go";

export const ICON_MAP = {
  oil: FaOilCan,
  health: FaSyringe,
  legal: GoLaw,
  education: SiEducative,
  finance: IoIosCash,
  media: MdPermMedia,
  logistics: BsTruck,
  enterprise: FaBusinessTime, // ✅ now works
};