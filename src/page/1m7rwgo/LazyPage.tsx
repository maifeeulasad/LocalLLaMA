import React, { lazy, Suspense } from 'react';

const Page1m7rwgo = lazy(() => import('./Page'));

const LazyPage1m7rwgo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7rwgo />
  </Suspense>
);

export { LazyPage1m7rwgo };
