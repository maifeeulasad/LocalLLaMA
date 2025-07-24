import React, { lazy, Suspense } from 'react';

const Page1m7pqln = lazy(() => import('./Page'));

const LazyPage1m7pqln = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7pqln />
  </Suspense>
);

export { LazyPage1m7pqln };
