import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

const SERVICES_ALLOWED_BLOCKS = ["myblocks/service-item"];

export default function Edit({ attributes, setAttributes }) {
  const { label, introTitle, introDescription } = attributes;

  return (
    <div {...useBlockProps()}>
      <section className="our-services section-spacing bg-light-green">
        <div className="our-services-container">
          <div className="our-services-intro">
            <RichText tagName="span" className="label" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Add label..." />
            <RichText tagName="h2" value={introTitle} onChange={(value) => setAttributes({ introTitle: value })} placeholder="Add title..." />
            <RichText tagName="p" value={introDescription} onChange={(value) => setAttributes({ introDescription: value })} placeholder="Add description..." />
          </div>
          <div className="services-hero-img"></div>
          <div className="our-services-list">
            <InnerBlocks allowedBlocks={SERVICES_ALLOWED_BLOCKS} />
          </div>
        </div>
      </section>
    </div>
  );
}
