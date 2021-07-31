import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./style.css";

const Controls = ({
  speed,
  skeletons,
  selectedItemIndex,
  onSelectedSkeletonChange,
  animations,
  onHandleAnimation,
  onSpeedChange,
}) => {
  return (
    <div className="controls-container">
      <Select
        label="Select Skeleton"
        className="select-skeleton"
        value={selectedItemIndex}
        fullWidth
        onChange={(e) => onSelectedSkeletonChange(e.target.value)}
      >
        {(skeletons || []).map((e, i) => (
          <MenuItem value={i} key={e.name}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
      <div className="btn-container">
        {animations.map((item) => (
          <Button
            onClick={() => onHandleAnimation(item.name)}
            variant="contained"
            color="primary"
            className="animation-btn"
          >
            {item.name}
          </Button>
        ))}
      </div>
      <Box component="div" className="text-center slider-wrp">
        <span>Time Multiplier Val: {speed} </span>
        <Slider onChange={(_, val) => onSpeedChange(val)} max={4} />
      </Box>
    </div>
  );
};

export default Controls;
