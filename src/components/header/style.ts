import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: COLORS.WHITE,
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
  },
});
