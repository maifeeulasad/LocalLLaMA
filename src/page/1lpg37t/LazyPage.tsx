import React, { lazy, Suspense } from 'react';

const Page1lpg37t = lazy(() => import('./Page'));

const LazyPage1lpg37t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpg37t />
  </Suspense>
);

export { LazyPage1lpg37t };
