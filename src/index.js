//import stylesheet

//import all the js files
import TyperWriter from "../src/TypeWriter"
import ChangeBg from "../src/ChangeBGColor"
import ZoomOutMobile from "./ZoomOutMobile"

TyperWriter();
ZoomOutMobile();
window.addEventListener("scroll", ChangeBg);