import { PanelBody, ToggleControl, PanelRow, ColorPalette } from "@wordpress/components";
import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import ourColors from "../../inc/ourColors";

export default function Edit(props) {
  const handleChangeTopSpace = (value) => {
    console.log(value);
    props.setAttributes({ addSpaceTop: value });
  };

  const currentColorValue = ourColors.find((color) => color.name === props.attributes.colorName)?.color;
  console.log(currentColorValue);

  const handleColorChange = (color) => {
    props.setAttributes({ colorName: color });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Generic Intro Settings" initialOpen={true}>
          <ToggleControl label="Add Space Above" checked={props.attributes.addSpaceTop} onChange={handleChangeTopSpace} />
          <PanelRow>
            <ColorPalette disableCustomColors={true} clearable={true} colors={ourColors} value={currentColorValue} onChange={handleColorChange} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className={`generic-intro section-spacing-sides ${props.attributes.addSpaceTop ? "section-pt" : ""}`}>
        <InnerBlocks allowedBlocks={["myblocks/generic-heading", "core/paragraph"]} />
      </div>
    </div>
  );
}
