import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  distanceContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    height: 60,
    width: '100%',
    marginHorizontal: '20%',
    alignSelf: 'center',
    zIndex: 10,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.black,
  },
});
