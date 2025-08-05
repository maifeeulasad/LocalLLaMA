import React, { lazy, Suspense } from 'react';

const Page1mi7lwi = lazy(() => import('./Page'));

const LazyPage1mi7lwi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi7lwi />
  </Suspense>
);

export { LazyPage1mi7lwi };
