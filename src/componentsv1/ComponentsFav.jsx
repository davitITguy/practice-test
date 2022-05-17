import React from "react";
import Test from "./Test";
import ClassTest from "./ClassTest";
import ClassPractice from "./ClassPractice";
import Toggle from "./Toggle";
import PropsInputFrom from "./PropsInputForm";
import FavTeste from "./FavTaste";
import Calculator from "./Calculator";
import AllComponents from "./../componentsAll/AllComponents";

class ComponentsFav extends React.Component {
  render() {
    return (
      <div>
        <Test />
        <ClassTest name={"We did it Shisho!"} />
        <ClassPractice />
        <Toggle />
        <PropsInputFrom />
        <FavTeste />
        <Calculator />
        <AllComponents />
      </div>
    );
  }
}
export default ComponentsFav;
