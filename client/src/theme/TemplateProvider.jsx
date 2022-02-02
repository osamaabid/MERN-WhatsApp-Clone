import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { createContext } from "react";

export const TemplateContext = createContext(null);
const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          height: "95%",
          top: 17,
          width: "28%",
          left: 62,
          boxShadow: "null",
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "unset",
        },
      },
    },
  });
  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
