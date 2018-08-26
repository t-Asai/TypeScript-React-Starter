import * as React from "react";

const properties = {
  noninteractive: {
    scrolling: "no"
  }
};

const Thumbnail = ({ page }: any) => {
  const sourceProps = { src: page };

  const iFrameProps = { ...sourceProps, ...properties.noninteractive };

  return (
    <div>
      <iframe {...iFrameProps} />
    </div>
  );
};
export default Thumbnail;
