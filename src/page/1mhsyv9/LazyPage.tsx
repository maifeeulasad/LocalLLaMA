import React, { lazy, Suspense } from 'react';

const Page1mhsyv9 = lazy(() => import('./Page'));

const LazyPage1mhsyv9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhsyv9 />
  </Suspense>
);

export { LazyPage1mhsyv9 };
