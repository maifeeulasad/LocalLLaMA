import React, { lazy, Suspense } from 'react';

const Page1mhrke2 = lazy(() => import('./Page'));

const LazyPage1mhrke2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhrke2 />
  </Suspense>
);

export { LazyPage1mhrke2 };
