import React, { lazy, Suspense } from 'react';

const Page1lmjimi = lazy(() => import('./Page'));

const LazyPage1lmjimi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmjimi />
  </Suspense>
);

export { LazyPage1lmjimi };
