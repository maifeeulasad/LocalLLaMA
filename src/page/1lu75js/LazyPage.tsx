import React, { lazy, Suspense } from 'react';

const Page1lu75js = lazy(() => import('./Page'));

const LazyPage1lu75js = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu75js />
  </Suspense>
);

export { LazyPage1lu75js };
