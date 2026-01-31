import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType(metadata.name, {
  edit: Edit,
  save: ({ attributes }) => {
    const { iconUrl } = attributes;
    return (
      <div className="service-item">
        <img src={iconUrl} alt="service icon" />
        <InnerBlocks.Content />
      </div>
    );
  },
});
