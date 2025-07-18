import React, { lazy, Suspense } from 'react';

const Page1m2981a = lazy(() => import('./Page'));

const LazyPage1m2981a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2981a />
  </Suspense>
);

export { LazyPage1m2981a };
