import React, { lazy, Suspense } from 'react';

const Page1lt6o4d = lazy(() => import('./Page'));

const LazyPage1lt6o4d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt6o4d />
  </Suspense>
);

export { LazyPage1lt6o4d };
