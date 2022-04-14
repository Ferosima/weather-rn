//@ts-ignore
import * as day from './day/*.png';
//@ts-ignore
import * as night from './day/*.png';

export const icons = { day: day, night: night };

export const getIconCondition = icon => {
  const [day, code] = icon.match('64x64/(.*).png')[1].split('/');
  return icons[day][`_${code}`];
};
