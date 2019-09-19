import React from "react";
import withAppInit from "./hocs/withAppInit";
import { ReactComponent as SVGSprite } from "./assets/sprite.svg";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HeadInfo from "./components/containers/HeadInfo/HeadInfo";
import Form from "./components/containers/Form/Form";
import WeekSelect from "./components/containers/WeekSelect/WeekSelect";
import Grid from "./components/containers/Grid/Grid";
import Downloads from "./components/containers/Downloads/Downloads";
import Recommendations from "./components/containers/Recommendations/Recommendations";

const App = () => (
  <>
    <SVGSprite />
    <MainLayout>
      <HeadInfo />
      <Form />
      <WeekSelect />
      <Grid />
      <Downloads />
      <Recommendations />
    </MainLayout>
  </>
);

export default withAppInit(App);
