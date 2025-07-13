import React, { lazy, Suspense } from 'react';

const Page1lyq7mc = lazy(() => import('./Page'));

const LazyPage1lyq7mc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyq7mc />
  </Suspense>
);

export { LazyPage1lyq7mc };
