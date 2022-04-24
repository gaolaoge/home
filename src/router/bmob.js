import Bmob from "hydrogen-js-sdk";
import { ApplicationID, SecretKey } from "../config";
Bmob.initialize(SecretKey, "183412");

export function _demo() {
  console.log("_");
  return Bmob.User.login("gaoge", "22334455.");
}
