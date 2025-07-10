import React, { lazy, Suspense } from 'react';

const Page1lvvkh2 = lazy(() => import('./Page'));

const LazyPage1lvvkh2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvvkh2 />
  </Suspense>
);

export { LazyPage1lvvkh2 };
