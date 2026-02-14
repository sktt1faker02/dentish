import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  edit: Edit,
  save: (props) => {
    const spacingClasses = `${props.attributes.addSpaceTop ? "space-top" : ""} ${props.attributes.addSpaceBottom ? "space-bottom" : ""}`;

    return (
      <div className={`generic-intro section-spacing ${spacingClasses} bg-${props.attributes.colorName || "reset"}`}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
