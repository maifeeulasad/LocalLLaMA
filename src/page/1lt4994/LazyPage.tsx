import React, { lazy, Suspense } from 'react';

const Page1lt4994 = lazy(() => import('./Page'));

const LazyPage1lt4994 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt4994 />
  </Suspense>
);

export { LazyPage1lt4994 };
