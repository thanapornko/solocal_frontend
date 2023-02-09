import { useContext } from "react";
import { ConfirmContext } from "../contexts/ConfirmContext";

export default function useLayout() {
  return useContext(ConfirmContext);
}
