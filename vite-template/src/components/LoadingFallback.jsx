import { lazy, Suspense } from 'react';
import { LoadingFallback } from './components/LoadingFallback';

const MyComponent = lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <MyComponent />
    </Suspense>
  );
}