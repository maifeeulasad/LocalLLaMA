import React, { lazy, Suspense } from 'react';

const Page1lnknry = lazy(() => import('./Page'));

const LazyPage1lnknry = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnknry />
  </Suspense>
);

export { LazyPage1lnknry };
