import React, { lazy, Suspense } from 'react';

const Page1mfodac = lazy(() => import('./Page'));

const LazyPage1mfodac = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfodac />
  </Suspense>
);

export { LazyPage1mfodac };
