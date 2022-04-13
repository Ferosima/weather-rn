export type TTheme = {
  box: {
    backgroundColor: string;
  };
  card: {
    borderColor: string;
    backgroundColor: string;
  };
  text: {
    dark: { color: string };
    default: { color: string };
    gray: { color: string };
    light: { color: string };
  };
  button: {
    active: {
      text: { color: string };
      wrapper: { backgroundColor: string };
    };
    inactive: {
      text: { color: string };
      wrapper: { backgroundColor: string };
    };
  };
  icon: {
    dark: {
      color: string;
    };
    default: {
      color: string;
    };
    inactive: {
      color: string;
    };
  };
  input: {
    wrapper: { backgroundColor: string; borderColor: string };
    input: { color: string };
    icon: { color: string };
  };
  color: {
    active: string;
  };
  image: {
    header_background: any;
  };
};

export type TThemes = { light: TTheme; dark: TTheme };
