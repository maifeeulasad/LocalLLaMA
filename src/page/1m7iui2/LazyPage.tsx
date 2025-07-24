import React, { lazy, Suspense } from 'react';

const Page1m7iui2 = lazy(() => import('./Page'));

const LazyPage1m7iui2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7iui2 />
  </Suspense>
);

export { LazyPage1m7iui2 };
