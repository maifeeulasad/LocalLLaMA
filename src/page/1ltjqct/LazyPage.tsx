import React, { lazy, Suspense } from 'react';

const Page1ltjqct = lazy(() => import('./Page'));

const LazyPage1ltjqct = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltjqct />
  </Suspense>
);

export { LazyPage1ltjqct };
