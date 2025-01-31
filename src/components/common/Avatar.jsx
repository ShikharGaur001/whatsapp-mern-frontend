import Image from "next/image";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const showContextMenu = (e) => {
    e.preventDefault()
    setContextMenuCoordinates({x: e.pageX, y: e.pageY})
    setIsContextMenuVisible(true)
  }
  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "xl" && (
          <div
            className="relative z-0 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 top-0 left-0 absolute flex items-center justify-center flex-col text-center gap-2 rounded-full ${
                hover ? "visible" : "hidden"
              }`}
              onClick={(e) => showContextMenu(e)}
              id="context-opener"
            >
              <FaCamera className="text-2xl" onClick={(e) => showContextMenu(e)} id="context-opener" />
              <span onClick={(e) => showContextMenu(e)}>Change Profile Image</span>
            </div>
            <div className="h-60 w-60">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Avatar;
