import React, { lazy, Suspense } from 'react';

const Page1m6orbr = lazy(() => import('./Page'));

const LazyPage1m6orbr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6orbr />
  </Suspense>
);

export { LazyPage1m6orbr };
