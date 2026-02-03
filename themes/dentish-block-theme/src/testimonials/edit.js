import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";

const ALLOWED_BLOCKS = ["myblocks/testimonial-card"];

const TEMPLATE = [
  ["myblocks/testimonial-card", {}],
  ["myblocks/testimonial-card", {}],
];

export default function Edit({ attributes, setAttributes }) {
  const { autoplay, autoplaySpeed } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Carousel Settings">
          <ToggleControl
            label="Autoplay"
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
          />
          {autoplay && (
            <RangeControl
              label="Autoplay Speed (ms)"
              value={autoplaySpeed}
              onChange={(value) => setAttributes({ autoplaySpeed: value })}
              min={2000}
              max={10000}
              step={500}
            />
          )}
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <div className="testimonials-block">
          <div className="testimonials-editor-grid">
            <InnerBlocks
              allowedBlocks={ALLOWED_BLOCKS}
              template={TEMPLATE}
              orientation="horizontal"
            />
          </div>
        </div>
      </div>
    </>
  );
}
