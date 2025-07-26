import React, { lazy, Suspense } from 'react';

const Page1m9qt65 = lazy(() => import('./Page'));

const LazyPage1m9qt65 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9qt65 />
  </Suspense>
);

export { LazyPage1m9qt65 };
