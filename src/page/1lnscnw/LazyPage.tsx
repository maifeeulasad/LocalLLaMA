import React, { lazy, Suspense } from 'react';

const Page1lnscnw = lazy(() => import('./Page'));

const LazyPage1lnscnw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnscnw />
  </Suspense>
);

export { LazyPage1lnscnw };
