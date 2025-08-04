import React, { lazy, Suspense } from 'react';

const Page1mgtbeq = lazy(() => import('./Page'));

const LazyPage1mgtbeq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgtbeq />
  </Suspense>
);

export { LazyPage1mgtbeq };
