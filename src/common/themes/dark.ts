const header_background = require('@assets/images/home_header_dark.png');
const bottom_background = require('@assets/images/bottom_background_dark.png');

export const dark = {
  box: {
    backgroundColor: '#12133D',
  },
  card: {
    default: {
      borderColor: '#1A1842',
      backgroundColor: 'rgba(26, 27, 71, 0.85)',
    },
    light: {
      borderColor: '#1A1842',
      backgroundColor: 'rgba(26, 27, 71, 0.85)',
    },
  },
  text: {
    black: { color: '#fff' },
    dark: { color: '#DCE2F8' },
    default: { color: '#DCE2F8' },
    gray: { color: '#4F587B' },
    light: { color: '#fff' },
  },
  button: {
    active: {
      text: { color: '#fff' },
      wrapper: { backgroundColor: '#4A6ADD' },
    },
    inactive: {
      text: { color: '#919CC2' },
      wrapper: { backgroundColor: '#2C2D54' },
    },
  },
  icon: {
    default: {
      color: '#fff',
    },
    active: {
      color: '#4A6ADD',
    },
    inactive: {
      color: '#6475B1',
    },
  },
  input: {
    wrapper: { backgroundColor: 'rgba(26, 24, 66, 0.6)', borderColor: '#1B1C48' },
    input: { color: '#DCE2F8' },
    icon: { color: '#6475B1' },
  },
  color: {
    active: '#4A6ADD',
  },
  image: {
    header_background: header_background,
    bottom_background: bottom_background,
  },
  bottomBar: {
    active: { color: '#C1C5EA' },
    inactive: { color: '#6475B1' },
  },
  modal: {
    backgroundColor: '#12133D',
    backdrop: {
      opacity: 0.1,
      backgroundColor: '#fff',
    },
  },
  option: {
    active: {
      backgroundColor: '#fff',
      color: '#4A6ADD',
    },
  },
};
