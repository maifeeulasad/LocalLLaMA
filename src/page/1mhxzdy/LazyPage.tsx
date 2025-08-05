import React, { lazy, Suspense } from 'react';

const Page1mhxzdy = lazy(() => import('./Page'));

const LazyPage1mhxzdy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhxzdy />
  </Suspense>
);

export { LazyPage1mhxzdy };
