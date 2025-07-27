import React, { lazy, Suspense } from 'react';

const Page1m9y506 = lazy(() => import('./Page'));

const LazyPage1m9y506 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9y506 />
  </Suspense>
);

export { LazyPage1m9y506 };
