import React, { lazy, Suspense } from 'react';

const Page1lqnvfr = lazy(() => import('./Page'));

const LazyPage1lqnvfr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqnvfr />
  </Suspense>
);

export { LazyPage1lqnvfr };
