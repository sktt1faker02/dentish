import { RichText } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

function Save(props) {
  const titleTag = props.attributes.size === "large" ? "h1" : props.attributes.size === "medium" ? "h2" : props.attributes.size === "label" ? "span" : "h3";

  return <RichText.Content tagName={titleTag} value={props.attributes.text} />;
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: Save,
});
