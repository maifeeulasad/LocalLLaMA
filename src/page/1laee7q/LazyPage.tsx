import React, { lazy, Suspense } from 'react';

const Page1laee7q = lazy(() => import('./Page'));

const LazyPage1laee7q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1laee7q />
  </Suspense>
);

export { LazyPage1laee7q };
