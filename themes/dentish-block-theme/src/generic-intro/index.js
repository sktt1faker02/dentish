import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  edit: Edit,
  save: (props) => {
    return (
      <div className={`generic-intro section-spacing-sides ${props.attributes.addSpaceTop ? "section-pt" : ""}`}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
