import React, { lazy, Suspense } from 'react';

const Page1m9tnj5 = lazy(() => import('./Page'));

const LazyPage1m9tnj5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9tnj5 />
  </Suspense>
);

export { LazyPage1m9tnj5 };
