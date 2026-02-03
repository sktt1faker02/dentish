import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import Edit from "./edit";
import metadata from "./block.json";

function Save({ attributes }) {
  const { autoplay, autoplaySpeed } = attributes;

  return (
    <div
      className="testimonials-block"
      data-autoplay={autoplay}
      data-autoplay-speed={autoplaySpeed}
    >
      <div className="swiper testimonials-swiper">
        <div className="swiper-wrapper">
          <InnerBlocks.Content />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: Save,
});
