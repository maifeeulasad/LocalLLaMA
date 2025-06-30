import React, { lazy, Suspense } from 'react';

const Page1lo1xma = lazy(() => import('./Page'));

const LazyPage1lo1xma = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo1xma />
  </Suspense>
);

export { LazyPage1lo1xma };
