import { useEffect, useRef } from 'react';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';

interface NotificationBarProps {
  show: boolean;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose?: () => void;
}

const NotificationBar = ({ show, message, type = 'success', onClose }: NotificationBarProps) => {
  const toastRef = useRef<ToastComponent>(null);

  useEffect(() => {
    if (show && toastRef.current) {
      toastRef.current.show({
        title: type === 'success' ? 'Success!' : type === 'error' ? 'Error!' : type === 'warning' ? 'Warning!' : 'Info!',
        content: message,
        cssClass: `e-${type}`,
        timeOut: 5000,
        showCloseButton: true,
        showProgressBar: true,
        newestOnTop: true,
        position: { X: 'Right', Y: 'Top' }
      });
    }
  }, [show, message, type]);

  return (
    <ToastComponent
      ref={toastRef}
      position={{ X: 'Right', Y: 'Top' }}
      width={350}
      height={100}
      showCloseButton={true}
      showProgressBar={true}
      timeOut={5000}
      newestOnTop={true}
      cssClass="e-custom-toast"
    />
  );
};

export default NotificationBar;
