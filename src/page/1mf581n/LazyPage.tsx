import React, { lazy, Suspense } from 'react';

const Page1mf581n = lazy(() => import('./Page'));

const LazyPage1mf581n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf581n />
  </Suspense>
);

export { LazyPage1mf581n };
