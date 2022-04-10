export type IconsId =
  | "close"
  | "drop"
  | "menu"
  | "pressure"
  | "search"
  | "weather"
  | "wind-1"
  | "wind";

export type IconsKey =
  | "Close"
  | "Drop"
  | "Menu"
  | "Pressure"
  | "Search"
  | "Weather"
  | "Wind_1"
  | "Wind";

export enum Icons {
  Close = "close",
  Drop = "drop",
  Menu = "menu",
  Pressure = "pressure",
  Search = "search",
  Weather = "weather",
  Wind_1 = "wind-1",
  Wind = "wind",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Close]: "61697",
  [Icons.Drop]: "61698",
  [Icons.Menu]: "61699",
  [Icons.Pressure]: "61700",
  [Icons.Search]: "61701",
  [Icons.Weather]: "61702",
  [Icons.Wind_1]: "61703",
  [Icons.Wind]: "61704",
};
