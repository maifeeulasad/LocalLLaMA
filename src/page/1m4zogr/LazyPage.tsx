import React, { lazy, Suspense } from 'react';

const Page1m4zogr = lazy(() => import('./Page'));

const LazyPage1m4zogr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4zogr />
  </Suspense>
);

export { LazyPage1m4zogr };
