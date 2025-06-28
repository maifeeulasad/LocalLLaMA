import React, { lazy, Suspense } from 'react';

const Page1llnwna = lazy(() => import('./Page'));

const LazyPage1llnwna = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llnwna />
  </Suspense>
);

export { LazyPage1llnwna };
