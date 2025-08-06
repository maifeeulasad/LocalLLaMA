import React, { lazy, Suspense } from 'react';

const Page1miwrli = lazy(() => import('./Page'));

const LazyPage1miwrli = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miwrli />
  </Suspense>
);

export { LazyPage1miwrli };
