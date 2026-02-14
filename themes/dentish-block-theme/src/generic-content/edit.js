import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Edit() {
  return (
    <div {...useBlockProps()}>
      <div className="generic-content section-spacing desktop-container">
        <InnerBlocks allowedBlocks={["myblocks/generic-heading", "core/heading", "core/post-title", "core/paragraph", "core/list", "core/post-featured-image"]} />
      </div>
    </div>
  );
}
