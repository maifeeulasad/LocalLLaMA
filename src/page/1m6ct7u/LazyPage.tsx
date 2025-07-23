import React, { lazy, Suspense } from 'react';

const Page1m6ct7u = lazy(() => import('./Page'));

const LazyPage1m6ct7u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ct7u />
  </Suspense>
);

export { LazyPage1m6ct7u };
