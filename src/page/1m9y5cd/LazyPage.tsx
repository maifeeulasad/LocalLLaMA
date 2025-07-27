import React, { lazy, Suspense } from 'react';

const Page1m9y5cd = lazy(() => import('./Page'));

const LazyPage1m9y5cd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9y5cd />
  </Suspense>
);

export { LazyPage1m9y5cd };
