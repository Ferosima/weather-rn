const header_background = require('@assets/images/home_header.png');
const bottom_background = require('@assets/images/bottom_background.png');

export const light = {
  box: {
    backgroundColor: '#FAFAFC',
  },
  card: {
    default: {
      borderColor: '#E3E9F1',
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
    },
    light: {
      borderColor: '#E3E9F1',
      backgroundColor: '#fff',
    },
  },
  text: {
    black: { color: '#1d1d1d' },
    dark: { color: '#203789' },
    default: { color: '#4A6ADA' },
    gray: { color: '#A8B2D3' },
    light: { color: '#fff' },
  },
  button: {
    active: {
      text: { color: '#fff' },
      wrapper: { backgroundColor: '#4A6ADD' },
    },
    inactive: {
      text: { color: '#1d1d1d' },
      wrapper: { backgroundColor: '#F1F1F1' },
    },
  },
  icon: {
    dark: {
      color: '#203789',
    },
    default: {
      color: '#4A6ADD',
    },
    inactive: {
      color: '#A8B2D3',
    },
  },
  input: {
    wrapper: { backgroundColor: '#fff', borderColor: '#E3E9F1' },
    input: { color: '#203789' },
    icon: { color: '#A8B2D3' },
  },
  color: {
    active: '#4A6ADD',
  },
  image: {
    header_background: header_background,
    bottom_background: bottom_background,
  },
  bottomBar: {
    active: { color: '#203789' },
    inactive: { color: '#A8B2D3' },
  },
  modal: {
    backgroundColor: '#ffff',
    backdrop: {
      opacity: 0.7,
      backgroundColor: 'gray',
    },
  },
  option: {
    active: {
      backgroundColor: '#4A6ADD',
      color: '#fff',
    },
  },
};
