import React, { lazy, Suspense } from 'react';

const Page1m6cfzi = lazy(() => import('./Page'));

const LazyPage1m6cfzi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6cfzi />
  </Suspense>
);

export { LazyPage1m6cfzi };
