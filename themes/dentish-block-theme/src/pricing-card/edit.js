import { useBlockProps, InnerBlocks, InspectorControls, RichText } from "@wordpress/block-editor";

export default function Edit(props) {
  const handlePriceChange = (price) => {
    props.setAttributes({ priceLabel: price });
  };

  const handleTitleChange = (title) => {
    props.setAttributes({ heading: title });
  };

  const TEMPLATE = [
    [
      "core/list",
      {},
      [
        ["core/list-item", { content: "Example Feature 1" }],
        ["core/list-item", { content: "Example Feature 2" }],
        ["core/list-item", { content: "Example Feature 3" }],
      ],
    ],
  ];

  return (
    <div {...useBlockProps()}>
      <div className="pricing-card">
        <RichText className="price-label" allowedFormats={[]} tagName="span" value={props.attributes.priceLabel} onChange={handlePriceChange} />

        <RichText allowedFormats={[]} tagName="h4" value={props.attributes.heading} onChange={handleTitleChange} />

        <InnerBlocks allowedBlocks={["core/list"]} template={TEMPLATE} templateLock="false" />
      </div>
    </div>
  );
}
