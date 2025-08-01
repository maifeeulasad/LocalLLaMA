import React, { lazy, Suspense } from 'react';

const Page1mesi2s = lazy(() => import('./Page'));

const LazyPage1mesi2s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mesi2s />
  </Suspense>
);

export { LazyPage1mesi2s };
