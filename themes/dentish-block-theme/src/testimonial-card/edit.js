import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Button, Placeholder } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { quote, name, location, imageId, imageUrl } = attributes;

  const onSelectImage = (media) => {
    setAttributes({
      imageId: media.id,
      imageUrl: media.url,
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      imageId: 0,
      imageUrl: "",
    });
  };

  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <ToolbarGroup>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={imageId}
              render={({ open }) => (
                <ToolbarButton onClick={open}>
                  {imageUrl ? "Replace Photo" : "Add Photo"}
                </ToolbarButton>
              )}
            />
          </MediaUploadCheck>
          {imageUrl && (
            <ToolbarButton onClick={onRemoveImage}>Remove Photo</ToolbarButton>
          )}
        </ToolbarGroup>
      </BlockControls>

      <div className="testimonial-card">
        <div className="testimonial-card__quote-section">
          <RichText
            tagName="p"
            className="testimonial-card__quote"
            value={quote}
            onChange={(value) => setAttributes({ quote: value })}
            placeholder="Enter testimonial quote..."
          />
          <RichText
            tagName="p"
            className="testimonial-card__name"
            value={name}
            onChange={(value) => setAttributes({ name: value })}
            placeholder="Name"
          />
          <RichText
            tagName="p"
            className="testimonial-card__location"
            value={location}
            onChange={(value) => setAttributes({ location: value })}
            placeholder="Location"
          />
        </div>

        <div className="testimonial-card__photo-section">
          {imageUrl ? (
            <img
              className="testimonial-card__image"
              src={imageUrl}
              alt={name || "Testimonial"}
            />
          ) : (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                value={imageId}
                render={({ open }) => (
                  <Placeholder
                    icon="format-image"
                    label="Add Photo"
                    className="testimonial-card__image-placeholder"
                  >
                    <Button variant="primary" onClick={open}>
                      Upload Image
                    </Button>
                  </Placeholder>
                )}
              />
            </MediaUploadCheck>
          )}
        </div>
      </div>
    </div>
  );
}
