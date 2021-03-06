import React from "react";
import * as helpers from "../../helpers.js";

//Import tabg styles
import "@siimple/css/scss/elements/tag.scss";

//Export tag component 
export const Tag = function (props) {
    //Clone the tag component props
    let newProps = helpers.filterProps(props, ["className", "color", "rounded"]);
    //Initialize the tag class list 
    let classList = ["siimple-tag"];
    //Check the color attribute
    if (typeof props.color === "string") {
        classList.push("siimple-tag--" + props.color.toLowerCase().trim());
    }
    //Check the rounded attribute
    if (typeof props.rounded === "boolean" && props.rounded === true) {
        classList.push("siimple-tag--rounded");
    }
    //Generate the tag classname
    newProps.className = helpers.classNames(classList, props.className);
    //Return the tag element
    return React.createElement("div", newProps, props.children);
};

//Tag default props
Tag.defaultProps = {
    "color": null,
    "rounded": false
};

