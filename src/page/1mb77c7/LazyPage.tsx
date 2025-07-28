import React, { lazy, Suspense } from 'react';

const Page1mb77c7 = lazy(() => import('./Page'));

const LazyPage1mb77c7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb77c7 />
  </Suspense>
);

export { LazyPage1mb77c7 };
