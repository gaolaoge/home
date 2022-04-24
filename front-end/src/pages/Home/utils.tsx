import bg1 from "../../assets/home_banner_bg1.jpeg";
import bg2 from "../../assets/home_banner_bg2.jpg";
import bg3 from "../../assets/home_banner_bg3.jpeg";
import bg4 from "../../assets/home_banner_bg4.jpeg";
import bg5 from "../../assets/home_banner_bg5.jpeg";
import bg6 from "../../assets/home_banner_bg6.jpeg";
import bg7 from "../../assets/home_banner_bg7.jpeg";
import bg8 from "../../assets/home_banner_bg8.jpeg";
import bg9 from "../../assets/home_banner_bg9.jpeg";
import bg10 from "../../assets/home_banner_bg10.jpeg";

function getBannerBGI() {
  const gbIndex = Math.floor(Math.random() * (10 - 1) + 1);
  let bgi;
  switch (gbIndex) {
    case 1:
      bgi = bg1;
      break;
    case 2:
      bgi = bg2;
      break;
    case 3:
      bgi = bg3;
      break;
    case 4:
      bgi = bg4;
      break;
    case 5:
      bgi = bg5;
      break;
    case 6:
      bgi = bg6;
      break;
    case 7:
      bgi = bg7;
      break;
    case 8:
      bgi = bg8;
      break;
    case 9:
      bgi = bg9;
      break;
    case 10:
      bgi = bg10;
      break;
  }
  return bgi;
}

export { getBannerBGI };
