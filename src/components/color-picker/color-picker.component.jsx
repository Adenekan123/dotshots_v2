import { BlockPicker } from "react-color";

import { pexelcolors } from "../../utils/pexel/pexel.utils";

const ColorPicker = ({ color, handleColorChange }) => (
  <BlockPicker
    colors={pexelcolors}
    color={color}
    onChange={handleColorChange}
  />
);

export default ColorPicker;
