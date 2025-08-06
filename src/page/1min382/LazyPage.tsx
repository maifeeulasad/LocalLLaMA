import React, { lazy, Suspense } from 'react';

const Page1min382 = lazy(() => import('./Page'));

const LazyPage1min382 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1min382 />
  </Suspense>
);

export { LazyPage1min382 };
