import React, { lazy, Suspense } from 'react';

const Page1mipahr = lazy(() => import('./Page'));

const LazyPage1mipahr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mipahr />
  </Suspense>
);

export { LazyPage1mipahr };
