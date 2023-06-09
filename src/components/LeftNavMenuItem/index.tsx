import React, { ReactElement } from "react";
import { IconType } from "react-icons";

interface ILeftNavMenuItem {
  text: string;
  icon: ReactElement<IconType>;
  action: any;
  className: string;
}

export const LeftNavMenuItem: React.FC<ILeftNavMenuItem> = ({
  text,
  icon,
  className,
  action,
}) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};
