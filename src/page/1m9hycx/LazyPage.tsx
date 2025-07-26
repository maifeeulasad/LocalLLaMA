import React, { lazy, Suspense } from 'react';

const Page1m9hycx = lazy(() => import('./Page'));

const LazyPage1m9hycx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9hycx />
  </Suspense>
);

export { LazyPage1m9hycx };
