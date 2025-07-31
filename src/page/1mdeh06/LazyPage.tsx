import React, { lazy, Suspense } from 'react';

const Page1mdeh06 = lazy(() => import('./Page'));

const LazyPage1mdeh06 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdeh06 />
  </Suspense>
);

export { LazyPage1mdeh06 };
