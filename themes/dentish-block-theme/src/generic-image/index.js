import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  edit: Edit,
  save: ({ attributes }) => {
    const { desktopUrl, mobileUrl } = attributes;

    if (!desktopUrl && !mobileUrl) return null;
    return (
      <>
        {desktopUrl && <img src={desktopUrl} className="image-desktop" alt="doctor-image" />}
        {mobileUrl && <img src={mobileUrl} className="image-mobile" alt="doctor-image" />}
      </>
    );
  },
});
