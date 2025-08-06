import React, { lazy, Suspense } from 'react';

const Page1mijwvo = lazy(() => import('./Page'));

const LazyPage1mijwvo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijwvo />
  </Suspense>
);

export { LazyPage1mijwvo };
