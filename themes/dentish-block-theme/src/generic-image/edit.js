import { useBlockProps, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { desktopId, desktopUrl, mobileId, mobileUrl } = attributes;
  return (
    <div {...useBlockProps()}>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) => setAttributes({ desktopId: media.id, desktopUrl: media.url })}
          allowedTypes={["image"]}
          value={desktopId}
          render={({ open }) => (
            <Button variant="primary" onClick={open}>
              {desktopUrl ? "Replace Desktop Image" : "Select Desktop Image"}
            </Button>
          )}
        />
      </MediaUploadCheck>

      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) => setAttributes({ mobileId: media.id, mobileUrl: media.url })}
          allowedTypes={["image"]}
          value={mobileId}
          render={({ open }) => (
            <Button variant="primary" onClick={open} style={{ marginLeft: "10px" }}>
              {mobileUrl ? "Replace Mobile Image" : "Select Mobile Image"}
            </Button>
          )}
        />
      </MediaUploadCheck>
      {desktopUrl && <img src={desktopUrl} alt="doctor-image" />}
      {mobileUrl && <img src={mobileUrl} alt="doctor-image" />}
    </div>
  );
}
