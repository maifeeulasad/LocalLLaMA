import React, { lazy, Suspense } from 'react';

const Page1m9tdts = lazy(() => import('./Page'));

const LazyPage1m9tdts = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9tdts />
  </Suspense>
);

export { LazyPage1m9tdts };
