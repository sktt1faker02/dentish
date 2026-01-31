import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  edit: Edit,
  save: (props) => {
    return (
      <a href={props.attributes.linkObject?.url || "#"} className={props.attributes.colorName === "reset" ? "" : props.attributes.colorName === "primary" ? "primary-btn" : props.attributes.colorName === "secondary" ? "secondary-btn" : ""}>
        {props.attributes.text}
      </a>
    );
  },
});
