import { StyleSheet } from 'react-native';

const brandPrimary = '#78BA82';
const brandInfo = '#90C1E4';
const brandWarn = '#D4C348';
const brandError = '#B02E0C';
const brandDark = '#0D1821';
const brandLight = '#FBF5EE';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: brandDark,
    color: brandLight,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
  },
  grid: {
    flex: 1,
    flexDirection: 'column',
  },
  bgDark: {
    backgroundColor: brandDark,
  },
  text: {
    color: brandLight,
  },
});

export default styles;
