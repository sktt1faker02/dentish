import { Button, PanelBody, ToggleControl } from "@wordpress/components";
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls, InnerBlocks } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const { imageUrl, imageId, reverse } = attributes;
  console.log(reverse);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Layout Settings" initialOpen={true}>
          <ToggleControl label="Reverse Columns" checked={reverse} onChange={(value) => setAttributes({ reverse: value })} />
        </PanelBody>
      </InspectorControls>
      <section className={`two-column-layout section-spacing bg-light-green`}>
        <div className={`section-container ${reverse ? "reverse-columns" : ""}`}>
          <div className="two-column-content">
            <InnerBlocks allowedBlocks={["myblocks/generic-heading", "core/paragraph", "myblocks/generic-button"]} />
          </div>
          <div className="two-column-image">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    imageId: media.id,
                    imageUrl: media.url,
                  })
                }
                allowedTypes={["image"]}
                value={imageId}
                render={({ open }) => (
                  <Button onClick={open} isSecondary>
                    {imageUrl ? "Change Image" : "Select Image"}
                  </Button>
                )}
              />
            </MediaUploadCheck>

            {imageUrl && <img src={imageUrl} alt="Two Column Layout Image" />}
          </div>
        </div>
      </section>
    </div>
  );
}
