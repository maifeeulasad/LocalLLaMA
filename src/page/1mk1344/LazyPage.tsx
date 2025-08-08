import React, { lazy, Suspense } from 'react';

const Page1mk1344 = lazy(() => import('./Page'));

const LazyPage1mk1344 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk1344 />
  </Suspense>
);

export { LazyPage1mk1344 };
