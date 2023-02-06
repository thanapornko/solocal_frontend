import { createContext, useState } from "react";

export const LayoutContext = createContext();

export default function LayoutContextProvider({
  children
}) {
  const [show, setShow] = useState(false);

  const showing = () => setShow(true);
  const notShowing = () => setShow(false);
  return (
    <LayoutContext.Provider
      value={{ show, setShow, showing, notShowing }}>
      {children}
    </LayoutContext.Provider>
  );
}
