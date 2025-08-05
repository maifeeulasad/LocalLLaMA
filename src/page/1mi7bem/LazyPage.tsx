import React, { lazy, Suspense } from 'react';

const Page1mi7bem = lazy(() => import('./Page'));

const LazyPage1mi7bem = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi7bem />
  </Suspense>
);

export { LazyPage1mi7bem };
