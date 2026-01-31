import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  return (
    <div {...useBlockProps()}>
      <div className="block-placeholder">Dentish Header Placeholder</div>
    </div>
  );
}
