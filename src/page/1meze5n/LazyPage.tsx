import React, { lazy, Suspense } from 'react';

const Page1meze5n = lazy(() => import('./Page'));

const LazyPage1meze5n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meze5n />
  </Suspense>
);

export { LazyPage1meze5n };
