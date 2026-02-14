import ourColors from "../../inc/ourColors";
import { PanelBody, ToggleControl, PanelRow, ColorPalette } from "@wordpress/components";
import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";

export default function Edit(props) {
  const handleChangeTopSpace = (value) => {
    // console.log(value);
    props.setAttributes({ addSpaceTop: value });
  };

  const handleChangeBottomSpace = (value) => {
    props.setAttributes({ addSpaceBottom: value });
    // console.log(value);
  };

  const spacingClasses = `${props.attributes.addSpaceTop ? "space-top" : ""} ${props.attributes.addSpaceBottom ? "space-bottom" : ""}`;

  const currentColorValue = ourColors.find((c) => c.name === props.attributes.colorName)?.color;
  console.log(currentColorValue);

  const handleColorChange = (colorValue) => {
    const selectedColor = ourColors.find((c) => c.color === colorValue);
    props.setAttributes({ colorName: selectedColor?.name });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Generic Intro Settings" initialOpen={true}>
          <PanelRow>
            <ColorPalette disableCustomColors={true} clearable={true} colors={ourColors} value={currentColorValue} onChange={handleColorChange} />
          </PanelRow>
          <PanelRow>
            <ToggleControl label="Add Space on Top" checked={props.attributes.addSpaceTop} onChange={handleChangeTopSpace} />
          </PanelRow>
          <PanelRow>
            <ToggleControl label="Add Space on Bottom" checked={props.attributes.addSpaceBottom} onChange={handleChangeBottomSpace} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className={`generic-intro section-spacing ${spacingClasses} bg-${props.attributes.colorName || "reset"}`}>
        <InnerBlocks allowedBlocks={["myblocks/generic-heading", "core/paragraph"]} />
      </div>
    </div>
  );
}
