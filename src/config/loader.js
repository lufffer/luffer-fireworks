const circle = {
  angle: {
    x: -8,
    y: 10
  },
  color: '#ff0055',
  radians: 0,
  radius: 4,
  velocity: 0.06,
  x: 100,
  y: 100,
  xSize: 100,
  ySize: 100
};

export const circle1 = {
  ...circle,
};

export const circle2 = {
  ...circle,
  angle: {
    x: 8,
    y: -10
  },
  color: '#0085fb',
  velocity: -0.06
};

export const particle1 = {
  ...circle1,
  radius: 0.8
};

export const particle2 = {
  ...circle2,
  radius: 0.8
};
