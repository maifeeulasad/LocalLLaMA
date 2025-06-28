import React, { lazy, Suspense } from 'react';

const Page1l6ibwg = lazy(() => import('./Page'));

const LazyPage1l6ibwg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1l6ibwg />
  </Suspense>
);

export { LazyPage1l6ibwg };
