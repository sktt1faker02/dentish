import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { RichText, BlockControls } from "@wordpress/block-editor";

export default function Edit(props) {
  const handleTextChange = (newText) => {
    props.setAttributes({ text: newText });
  };

  const titleTag = props.attributes.size === "large" ? "h1" : props.attributes.size === "medium" ? "h2" : props.attributes.size === "label" ? "span" : "h3";

  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton isPressed={props.attributes.size === "large"} onClick={() => props.setAttributes({ size: "large" })}>
            Large
          </ToolbarButton>

          <ToolbarButton isPressed={props.attributes.size === "medium"} onClick={() => props.setAttributes({ size: "medium" })}>
            Medium
          </ToolbarButton>

          <ToolbarButton isPressed={props.attributes.size === "small"} onClick={() => props.setAttributes({ size: "small" })}>
            Small
          </ToolbarButton>

          <ToolbarButton isPressed={props.attributes.size === "label"} onClick={() => props.setAttributes({ size: "label" })}>
            Label
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText allowedFormats={[]} tagName={titleTag} value={props.attributes.text} onChange={handleTextChange} />
    </div>
  );
}
