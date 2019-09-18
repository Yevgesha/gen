import React from "react";
import withAppInit from "./hocs/withAppInit";
import { ReactComponent as SVGSprite } from "./assets/sprite.svg";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HeadInfo from "./components/containers/HeadInfo/HeadInfo";
import Form from "./components/containers/Form/Form";
import Grid from "./components/containers/Grid/Grid";

const App = () => (
  <>
    <SVGSprite />
    <MainLayout>
      <HeadInfo />
      <Form />
      <Grid />
    </MainLayout>
  </>
);

export default withAppInit(App);
