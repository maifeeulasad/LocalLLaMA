import React, { lazy, Suspense } from 'react';

const Page1ltq7n9 = lazy(() => import('./Page'));

const LazyPage1ltq7n9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltq7n9 />
  </Suspense>
);

export { LazyPage1ltq7n9 };
