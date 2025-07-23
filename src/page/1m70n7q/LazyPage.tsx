import React, { lazy, Suspense } from 'react';

const Page1m70n7q = lazy(() => import('./Page'));

const LazyPage1m70n7q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m70n7q />
  </Suspense>
);

export { LazyPage1m70n7q };
