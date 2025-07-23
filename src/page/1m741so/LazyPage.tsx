import React, { lazy, Suspense } from 'react';

const Page1m741so = lazy(() => import('./Page'));

const LazyPage1m741so = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m741so />
  </Suspense>
);

export { LazyPage1m741so };
