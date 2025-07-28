import React, { lazy, Suspense } from 'react';

const Page1malsbp = lazy(() => import('./Page'));

const LazyPage1malsbp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1malsbp />
  </Suspense>
);

export { LazyPage1malsbp };
