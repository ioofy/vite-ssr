import React, { PropsWithChildren, useContext, useState } from "react";

export interface Context {
  name: string;
  setName: (val: string) => void;
}
const defaultVal = {
  name: "",
  setName: () => {},
} as Context;

const context = React.createContext(defaultVal);

const { Provider } = context;

export const AppContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [name, setName] = useState(defaultVal.name);
  return <Provider value={{ name, setName }}>{children}</Provider>;
};

export const useAppContext = () => useContext(context);
