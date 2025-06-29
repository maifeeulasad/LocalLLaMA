import React, { lazy, Suspense } from 'react';

const Page1lnejb6 = lazy(() => import('./Page'));

const LazyPage1lnejb6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnejb6 />
  </Suspense>
);

export { LazyPage1lnejb6 };
