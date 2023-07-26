import { createContext, useState } from "react";

export const HeaderContext = createContext(null);

function HeaderProvider(props) {
  const [title, setTitle] = useState("Sport Nutrition");

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <HeaderContext.Provider
      value={{
        title,
        changeTitle,
      }}
    >
      {props?.children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
