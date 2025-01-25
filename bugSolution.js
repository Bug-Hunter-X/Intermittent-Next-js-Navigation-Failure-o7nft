```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/my-route');
  };
  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
      console.log('Navigation successful!', url);
    };
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);
  return (
    <button onClick={handleClick}>Go to My Route</button>
  );
}
```