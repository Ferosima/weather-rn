export type IconsId =
  | "chevron"
  | "close"
  | "done"
  | "drop"
  | "menu"
  | "moon"
  | "pressure"
  | "search"
  | "sun"
  | "weather"
  | "wind-1"
  | "wind";

export type IconsKey =
  | "Chevron"
  | "Close"
  | "Done"
  | "Drop"
  | "Menu"
  | "Moon"
  | "Pressure"
  | "Search"
  | "Sun"
  | "Weather"
  | "Wind_1"
  | "Wind";

export enum Icons {
  Chevron = "chevron",
  Close = "close",
  Done = "done",
  Drop = "drop",
  Menu = "menu",
  Moon = "moon",
  Pressure = "pressure",
  Search = "search",
  Sun = "sun",
  Weather = "weather",
  Wind_1 = "wind-1",
  Wind = "wind",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Chevron]: "61697",
  [Icons.Close]: "61698",
  [Icons.Done]: "61699",
  [Icons.Drop]: "61700",
  [Icons.Menu]: "61701",
  [Icons.Moon]: "61702",
  [Icons.Pressure]: "61703",
  [Icons.Search]: "61704",
  [Icons.Sun]: "61705",
  [Icons.Weather]: "61706",
  [Icons.Wind_1]: "61707",
  [Icons.Wind]: "61708",
};
