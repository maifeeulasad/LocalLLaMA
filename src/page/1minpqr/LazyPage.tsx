import React, { lazy, Suspense } from 'react';

const Page1minpqr = lazy(() => import('./Page'));

const LazyPage1minpqr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minpqr />
  </Suspense>
);

export { LazyPage1minpqr };
