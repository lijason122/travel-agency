import { useEffect } from 'react';
import { useNotification } from './notification-context';

export const useAuthNotification = () => {
  const { showNotification } = useNotification();

  useEffect(() => {
    // Check if user just signed in via OAuth by looking for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const isOAuthRedirect = urlParams.get('oauth') === 'success';
    
    if (isOAuthRedirect) {
      showNotification('Successfully signed in with Google!', 'success');
      
      // Clean up the URL parameter
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('oauth');
      window.history.replaceState({}, '', newUrl.toString());
    }
  }, [showNotification]);
};
