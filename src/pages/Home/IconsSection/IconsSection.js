import React from "react";
import icon1 from "../../../assests/icons/promotion1.png";

const IconsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 w-10/12 md:w-8/12 m-auto my-10 md:my-24">
      <div>
        <div>
          <img className="w-20" src={icon1} alt="" />
        </div>
        <div>
          <h2 className="text-xs">Safe delivery</h2>
        </div>
      </div>
      <div className="divider divider-horizontal"></div>

      <div>2</div>
      <div className="divider divider-horizontal"></div>

      <div>3</div>
      <div className="divider divider-horizontal"></div>

      <div>4</div>
    </div>
  );
};

export default IconsSection;
