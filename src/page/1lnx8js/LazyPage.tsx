import React, { lazy, Suspense } from 'react';

const Page1lnx8js = lazy(() => import('./Page'));

const LazyPage1lnx8js = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnx8js />
  </Suspense>
);

export { LazyPage1lnx8js };
