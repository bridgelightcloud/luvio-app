export const colors = {
  brandPrimary: '#78BA82',
  brandPrimaryLight: '#BCDCC1',
  brandInfo: '#90C1E4',
  brandWarn: '#D4C348',
  brandError: '#B02E0C',
  brandDark: '#0D1821',
  brandLight: '#FBF5EE',
};

export const rootFontSize = '20';

export function getColor(props) {
  const propKeys = Object.keys(props);
  for (let i = 0; i < propKeys.length; i++) {
    const color = colors[`brand${propKeys[i]}`];
    if (color) {
      return `color: ${color};`;
    }
  }
  return `color: ${colors.brandLight};`;
}

export function getPadding(props) {
  const padding = {
    t: 0, // top
    r: 0, // right
    b: 0, // bottom
    l: 0, // left
  };
  if (props.pt) {
    padding.t = props.pt;
  }
  if (props.pr) {
    padding.r = props.pt;
  }
  if (props.pb) {
    padding.b = props.pt;
  }
  if (props.pl) {
    padding.l = props.pt;
  }
  if (props.px) {
    padding.r = props.px;
    padding.l = props.px;
  }
  if (props.py) {
    padding.t = props.py;
    padding.b = props.py;
  }
  if (props.p) {
    padding.t = props.p;
    padding.r = props.p;
    padding.b = props.p;
    padding.l = props.p;
  }
  return `
    padding-top: ${padding.t};
    padding-right: ${padding.r};
    padding-bottom: ${padding.b};
    padding-left: ${padding.l};
  `;
}

export function getFlex(props) {
  const { flex } = props;
  return flex ? `flex: ${flex};` : '';
}

export function rem(factor = 1) {
  return `${factor * rootFontSize}px`;
}

export default null;
