import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

function Save({ attributes }) {
  const { label, introTitle, introDescription } = attributes;

  return (
    <section className="our-services section-spacing bg-light-green">
      <div className="our-services-container desktop-container">
        <div className="our-services-intro">
          <span className="label">{label}</span>
          {introTitle && <h2>{introTitle}</h2>}
          {introDescription && <p>{introDescription}</p>}
        </div>
        <div className="services-hero-img">
          <img src="http://dentish.local/wp-content/uploads/2026/02/dentish-4-2.webp" alt="Dentist performing dental procedure" />
        </div>
        <div className="our-services-list">
          <InnerBlocks.Content />
        </div>
      </div>
    </section>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: Save,
});
