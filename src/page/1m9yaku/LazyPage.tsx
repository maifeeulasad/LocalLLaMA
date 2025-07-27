import React, { lazy, Suspense } from 'react';

const Page1m9yaku = lazy(() => import('./Page'));

const LazyPage1m9yaku = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9yaku />
  </Suspense>
);

export { LazyPage1m9yaku };
