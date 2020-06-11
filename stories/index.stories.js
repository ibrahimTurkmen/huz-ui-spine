import React from "react";
import { storiesOf } from "@storybook/react";

import Spine from "../src/ui";

// PROJECT-CONTEXT
import initMockup, { Provider as MockupProvider } from "../src/@mockup/project";

const mockup = initMockup();
const stories = storiesOf("index", module);

stories.add("default", () => (
  <MockupProvider>
    <Spine />
  </MockupProvider>
));