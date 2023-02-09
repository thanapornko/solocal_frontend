import { createContext, useState } from "react";

export const ConfirmContext = createContext();

export default function ConfirmContextProvider({
  children
}) {
  const [open, setOpen] = useState(false);

  const opening = () => setOpen(true);
  const notOpening = () => setOpen(false);
  return (
    <ConfirmContext.Provider
      value={{ open, setOpen, opening, notOpening }}>
      {children}
    </ConfirmContext.Provider>
  );
}
