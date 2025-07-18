import React, { lazy, Suspense } from 'react';

const Page1m2xewp = lazy(() => import('./Page'));

const LazyPage1m2xewp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2xewp />
  </Suspense>
);

export { LazyPage1m2xewp };
