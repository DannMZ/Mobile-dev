import { View, Text, StyleSheet, Animated } from 'react-native';
import Toast from 'react-native-toast-message';

const AnimatedView = Animated.View; // Створюємо змінну для Animated.View

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    marginLeft: 8,
    flexShrink: 1,
  },
  success: {
    backgroundColor: '#34C759',
  },
  error: {
    backgroundColor: '#FF3B30',
  },
  info: {
    backgroundColor: '#007AFF',
  },
  warning: {
    backgroundColor: '#FF9500',
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const icons = {
  success: '✓',
  error: '⚠',
  info: 'i',
  warning: '!',
};

export const toastConfig = {
  success: ({ text1 }: { text1?: string }) => (
    <AnimatedView style={[styles.container, styles.success]}>
      <View style={styles.iconContainer}>
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{icons.success}</Text>
      </View>
      <Text style={styles.text} numberOfLines={2}>{text1}</Text>
    </AnimatedView>
  ),
  error: ({ text1 }: { text1?: string }) => (
    <AnimatedView style={[styles.container, styles.error]}>
      <View style={styles.iconContainer}>
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{icons.error}</Text>
      </View>
      <Text style={styles.text} numberOfLines={2}>{text1 || 'An error occurred'}</Text>
    </AnimatedView>
  ),
  info: ({ text1 }: { text1?: string }) => (
    <AnimatedView style={[styles.container, styles.info]}>
      <View style={styles.iconContainer}>
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{icons.info}</Text>
      </View>
      <Text style={styles.text} numberOfLines={2}>{text1}</Text>
    </AnimatedView>
  ),
  warning: ({ text1 }: { text1?: string }) => (
    <AnimatedView style={[styles.container, styles.warning]}>
      <View style={styles.iconContainer}>
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{icons.warning}</Text>
      </View>
      <Text style={styles.text} numberOfLines={2}>{text1}</Text>
    </AnimatedView>
  ),
};

// Типізація для функцій роботи з тостами
type ToastOptions = {
  duration?: number;
  position?: 'top' | 'bottom';
};

export const showToast = (
  type: 'success' | 'error' | 'info' | 'warning',
  message: string,
  options?: ToastOptions
) => {
  Toast.show({
    type,
    text1: message,
    visibilityTime: options?.duration || 3000,
    position: options?.position || 'top',
  });
};

export const hideToast = () => {
  Toast.hide();
};