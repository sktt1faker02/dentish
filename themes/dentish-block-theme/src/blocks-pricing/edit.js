import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";

export default function Edit(props) {
  return (
    <div {...useBlockProps()}>
      <div className="pricing-container">
        <InnerBlocks allowedBlocks={["myblocks/pricing-card"]} />
      </div>
    </div>
  );
}
