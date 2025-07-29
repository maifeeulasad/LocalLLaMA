import React, { lazy, Suspense } from 'react';

const Page1mbt030 = lazy(() => import('./Page'));

const LazyPage1mbt030 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbt030 />
  </Suspense>
);

export { LazyPage1mbt030 };
