import React, { lazy, Suspense } from 'react';

const Page1m7xsjm = lazy(() => import('./Page'));

const LazyPage1m7xsjm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7xsjm />
  </Suspense>
);

export { LazyPage1m7xsjm };
