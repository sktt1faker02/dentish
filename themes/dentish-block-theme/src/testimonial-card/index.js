import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

function Save({ attributes }) {
  const { quote, name, location, imageUrl } = attributes;

  return (
    <div className="swiper-slide">
      <div className="testimonial-card">
        <div className="testimonial-card__quote-section">
          <p className="testimonial-card__quote">"{quote}"</p>
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__location">{location}</p>
        </div>
        <div className="testimonial-card__photo-section">
          {imageUrl && (
            <img
              className="testimonial-card__image"
              src={imageUrl}
              alt={name || "Testimonial"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: Save,
});
