import React, { lazy, Suspense } from 'react';

const Page1mgjpvm = lazy(() => import('./Page'));

const LazyPage1mgjpvm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgjpvm />
  </Suspense>
);

export { LazyPage1mgjpvm };
