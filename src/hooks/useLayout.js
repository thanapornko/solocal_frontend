import { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";

export default function useLayout() {
  return useContext(LayoutContext);
}
