import React from "react";
import { Provider } from "@byhuz/huz-ui-project";
import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

export default () => {
  return {};
};

const provider = ({ children }) => (
  <Provider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

export { provider as Provider };
