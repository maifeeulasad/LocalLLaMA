import React, { lazy, Suspense } from 'react';

const Page1megpco = lazy(() => import('./Page'));

const LazyPage1megpco = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1megpco />
  </Suspense>
);

export { LazyPage1megpco };
