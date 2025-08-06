import React, { lazy, Suspense } from 'react';

const Page1miwgwt = lazy(() => import('./Page'));

const LazyPage1miwgwt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miwgwt />
  </Suspense>
);

export { LazyPage1miwgwt };
