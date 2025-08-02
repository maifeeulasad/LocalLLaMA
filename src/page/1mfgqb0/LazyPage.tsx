import React, { lazy, Suspense } from 'react';

const Page1mfgqb0 = lazy(() => import('./Page'));

const LazyPage1mfgqb0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfgqb0 />
  </Suspense>
);

export { LazyPage1mfgqb0 };
