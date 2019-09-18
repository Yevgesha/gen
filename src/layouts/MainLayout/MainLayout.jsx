import React from "react";
import { StyledMainLayout } from "./StyledMainLayout";

const MainLayout = props => (
  <StyledMainLayout>{props.children}</StyledMainLayout>
);

export default MainLayout;
