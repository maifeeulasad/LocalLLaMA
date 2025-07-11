import React, { lazy, Suspense } from 'react';

const Page1lwif50 = lazy(() => import('./Page'));

const LazyPage1lwif50 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwif50 />
  </Suspense>
);

export { LazyPage1lwif50 };
