import React from "react";
import moment from "moment";

interface IVideoLength {
  time: number;
}

export const VideoLength: React.FC<IVideoLength> = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </div>
  );
};
