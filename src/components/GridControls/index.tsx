import * as React from "react";
import classNames from "classnames";

import style from "./GridControls.css";

const GridControls = (props: {
    className?: string;
    isMultiplayer: boolean;
    gameUrl: string;
}) => (
    <div className={classNames(style.root, props.className)}>
        {null}
    </div>
);

export default GridControls;
