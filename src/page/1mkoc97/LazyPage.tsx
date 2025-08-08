import React, { lazy, Suspense } from 'react';

const Page1mkoc97 = lazy(() => import('./Page'));

const LazyPage1mkoc97 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkoc97 />
  </Suspense>
);

export { LazyPage1mkoc97 };
