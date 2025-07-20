import React, { lazy, Suspense } from 'react';

const Page1m48v53 = lazy(() => import('./Page'));

const LazyPage1m48v53 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m48v53 />
  </Suspense>
);

export { LazyPage1m48v53 };
