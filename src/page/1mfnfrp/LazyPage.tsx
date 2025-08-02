import React, { lazy, Suspense } from 'react';

const Page1mfnfrp = lazy(() => import('./Page'));

const LazyPage1mfnfrp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfnfrp />
  </Suspense>
);

export { LazyPage1mfnfrp };
