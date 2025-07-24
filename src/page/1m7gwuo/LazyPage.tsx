import React, { lazy, Suspense } from 'react';

const Page1m7gwuo = lazy(() => import('./Page'));

const LazyPage1m7gwuo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7gwuo />
  </Suspense>
);

export { LazyPage1m7gwuo };
