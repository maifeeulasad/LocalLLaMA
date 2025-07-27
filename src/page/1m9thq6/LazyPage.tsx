import React, { lazy, Suspense } from 'react';

const Page1m9thq6 = lazy(() => import('./Page'));

const LazyPage1m9thq6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9thq6 />
  </Suspense>
);

export { LazyPage1m9thq6 };
