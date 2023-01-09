import { createClient } from "pexels";

const pexel = createClient(
  "563492ad6f91700001000001729a0b875e73410cad1ff1273030badc"
);

const colors = {
  red: "#FF0000",
  orange: "#FFA500",
  green: "#008000",
  yellow: "#FFFF00",
  violet: "#EE82EE",
  pink: "#FFC0CB",
  brown: "#A52A2A",
  black: "#000000",
  grey: "#808080",
  white: "#FFFFFF",
};

export const pexelcolors = Object.keys(colors);

const getcolorname = (colorcode) => {
  let name = "nothing";
  pexelcolors.forEach((color) =>
    colors[color].toLowerCase() === colorcode ? (name = color) : ""
  );

  return name;
};

export const searchPhothos = async (page = 1, query, filter) => {
  const { orientation, size, color, per_page } = filter;
  return await pexel.photos.search({
    page,
    query,
    orientation,
    size,
    color: getcolorname(color),
    per_page,
  });
};
export const getPhothos = async (page = 1) => {
  return await pexel.photos.curated({ page, per_page: 50 });
};

export const getPhotho = async (photoid) => {
  return await pexel.photos.show({ id: photoid });
};
