import { ToolbarGroup, ToolbarButton, Button } from "@wordpress/components";
import { useBlockProps, InnerBlocks, MediaUpload, MediaUploadCheck, RichText, BlockControls } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const { iconId, iconUrl } = attributes;

  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <ToolbarGroup>
          <MediaUploadCheck>
            <MediaUpload onSelect={(media) => setAttributes({ iconId: media.id, iconUrl: media.url })} allowedTypes={["image"]} value={iconId} render={({ open }) => <ToolbarButton onClick={open}>{iconUrl ? "Replace Icon" : "Add Icon"}</ToolbarButton>} />
          </MediaUploadCheck>
        </ToolbarGroup>
      </BlockControls>

      <div className="service-item">
        {iconUrl && (
          <div className="service-icon">
            <img src={iconUrl} alt="tooth gum" />
          </div>
        )}
        <InnerBlocks allowedBlocks={["myblocks/generic-heading", "core/paragraph", "myblocks/generic-button"]} />
      </div>
    </div>
  );
}
