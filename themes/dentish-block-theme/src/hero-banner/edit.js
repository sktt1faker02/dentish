import { PanelBody, ToggleControl } from "@wordpress/components";
import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";

const TEMPLATE = [
  ["core/group", { className: "hero-content-col-1" }, [
    ["myblocks/generic-heading", {}],
    ["core/paragraph", {}],
    ["myblocks/generic-button", {}],
  ]],
  ["core/group", { className: "hero-content-col-2" }, [
    ["myblocks/generic-image", {}],
  ]],
];

export default function Edit(props) {
  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Is Hero Banner?" initialOpen={true}>
          <ToggleControl label="Enable Hero Banner" checked={props.attributes.isHero} onChange={(value) => props.setAttributes({ isHero: value })} />
        </PanelBody>
      </InspectorControls>
      <section className={`front-page-hero ${props.attributes.isHero ? "section-pt" : "section-spacing"}`}>
        <div className="hero-content">
          <InnerBlocks template={TEMPLATE} />
        </div>
      </section>
    </div>
  );
}
