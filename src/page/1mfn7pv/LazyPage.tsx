import React, { lazy, Suspense } from 'react';

const Page1mfn7pv = lazy(() => import('./Page'));

const LazyPage1mfn7pv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfn7pv />
  </Suspense>
);

export { LazyPage1mfn7pv };
