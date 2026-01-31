import ourColors from "../../inc/ourColors";
import { link } from "@wordpress/icons";
import { ToolbarGroup, ToolbarButton, Popover, Button, PanelBody, PanelRow, ColorPalette } from "@wordpress/components";
import { useBlockProps, RichText, BlockControls, InspectorControls, __experimentalLinkControl as LinkControl, getColorObjectByColorValue } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

export default function Edit(props) {
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

  const handleTextChange = (newText) => {
    props.setAttributes({ text: newText });
  };

  const buttonHandler = () => {
    setIsLinkPickerVisible(!isLinkPickerVisible);
  };

  const handleLinkChange = (newLink) => {
    props.setAttributes({ linkObject: newLink });
  };

  const currentColorValue = ourColors.find((color) => color.name === props.attributes.colorName)?.color;

  const handleColorChange = (newColor) => {
    props.setAttributes({ colorName: getColorObjectByColorValue(ourColors, newColor).name });
  };

  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={buttonHandler} icon={link} />
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Button Color Settings" initialOpen={true}>
          <PanelRow>
            <ColorPalette disableCustomColors={true} clearable={true} colors={ourColors} value={currentColorValue} onChange={handleColorChange} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <RichText 
        allowedFormats={[]} 
        tagName="a" 
        className={props.attributes.colorName === "reset" ? "" : props.attributes.colorName === "primary" ? "primary-btn" : props.attributes.colorName === "secondary" ? "secondary-btn" : ""} 
        value={props.attributes.text} 
        onChange={handleTextChange} 
      />
      {isLinkPickerVisible && (
        <Popover position="middle center" onFocusOutside={() => setIsLinkPickerVisible(false)}>
          <LinkControl settings={[]} value={props.attributes.linkObject} onChange={handleLinkChange} />
          <Button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display: "block", width: "100%" }}>
            Confirm Link
          </Button>
        </Popover>
      )}
    </div>
  );
}
