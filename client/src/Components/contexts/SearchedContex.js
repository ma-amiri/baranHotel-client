import React, { createContext, useState } from "react";

const InitialState = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(InitialState);

export const SearchContextProvider = ({ children }) => {
  const [state, setState] = useState(InitialState);

  const newSearch = (payload) => {
    setState(payload);
  };

  const resetSearch = () => {
    setState(InitialState);
  };

  return (
    <SearchContext.Provider
      value={{
        ...state,
        newSearch,
        resetSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
