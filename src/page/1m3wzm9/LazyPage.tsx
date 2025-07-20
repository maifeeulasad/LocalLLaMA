import React, { lazy, Suspense } from 'react';

const Page1m3wzm9 = lazy(() => import('./Page'));

const LazyPage1m3wzm9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3wzm9 />
  </Suspense>
);

export { LazyPage1m3wzm9 };
