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
  for (let i = 0; i < propKeys.length; i += 1) {
    const color = colors[`brand${propKeys[i]}`];
    if (color) {
      return `color: ${color};`;
    }
  }
  return `color: ${colors.brandLight};`;
}

export function getPadding(props) {
  const {
    p, px, py, pt, pr, pb, pl,
  } = props;

  return `
    padding-top: ${p || py || pt || 0}px;
    padding-right: ${p || px || pr || 0}px;
    padding-bottom: ${p || py || pb || 0}px;
    padding-left: ${p || px || pl || 0}px;
  `;
}

export function getAlignment(props) {
  if (props.horizontal) {
    return 'justify-content: center;';
  } if (props.vertical) {
    return 'align-items: center;';
  }
  return `
    justify-content: center;
    align-items: center;`;
}

export function getFlex(props) {
  const { flex } = props;
  return `flex: ${flex || 1};`;
}

export function rem(factor = 1) {
  return `${factor * rootFontSize}px`;
}

export function getFocusColor(props) {
  if (props.focused) {
    return colors.brandPrimaryLight;
  }
  return colors.brandPrimary;
}

export default null;
