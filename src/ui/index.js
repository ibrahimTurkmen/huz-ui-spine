import React, { useEffect, useRef } from "react";
import spine from "@byhuz/spine-ts/build/spine-player";
import "./style.css";
import useInput from "../hooks/useInput";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Controls from "./Controls";
import ViewSpine from "./ViewSpine";

const SKELETONS = [
  {
    name: "powerup",
    jsonUrl: "assets/powerup/powerup-pro.json",
    atlasUrl: "assets/powerup/powerup-pro.atlas",
  },
  {
    name: "raptor",
    jsonUrl: "assets/raptor/raptor-pro.json",
    atlasUrl: "assets/raptor/raptor-pro.atlas",
  },
];

export default () => {
  const selectedItemIndex = useInput(1);
  const animations = useInput([]);
  const spinePlayerRef = useRef();
  const speed = useInput(1);

  useEffect(() => {
    const { name, atlasUrl, jsonUrl } = SKELETONS[selectedItemIndex.val];
    spinePlayerRef.current = new spine.SpinePlayer(name, {
      atlasUrl,
      jsonUrl,
      showControls: false,
      success: onLoadSuccess,
    });
  }, [selectedItemIndex.val]);

  const onLoadSuccess = () => {
    animations.onChange(
      spinePlayerRef.current?.animationState?.data.skeletonData.animations || []
    );
    spinePlayerRef.current.speed = 1;
  };

  const onSpeedChange = (val) => {
    speed.onChange(val);
    spinePlayerRef.current.speed = val;
  };

  const onHandleAnimation = (name) => spinePlayerRef.current.setAnimation(name);
  return (
    <div className="app-container">
      <h1>{SKELETONS[selectedItemIndex.val].name}</h1>
      <Grid container alignItems="flex-end" component={Paper}>
        <Grid item sm={8}>
          <ViewSpine
            key={SKELETONS[selectedItemIndex.val].name}
            id={SKELETONS[selectedItemIndex.val].name}
          />
        </Grid>
        <Grid item sm={4}>
          <Controls
            skeletons={SKELETONS}
            selectedItemIndex={selectedItemIndex.val}
            onSelectedSkeletonChange={selectedItemIndex.onChange}
            animations={animations.val}
            onHandleAnimation={onHandleAnimation}
            onSpeedChange={onSpeedChange}
            speed={speed.val}
          />
        </Grid>
      </Grid>
    </div>
  );
};
