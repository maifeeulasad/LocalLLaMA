import React, { lazy, Suspense } from 'react';

const Page1m3xp21 = lazy(() => import('./Page'));

const LazyPage1m3xp21 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3xp21 />
  </Suspense>
);

export { LazyPage1m3xp21 };
