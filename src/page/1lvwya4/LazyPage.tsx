import React, { lazy, Suspense } from 'react';

const Page1lvwya4 = lazy(() => import('./Page'));

const LazyPage1lvwya4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvwya4 />
  </Suspense>
);

export { LazyPage1lvwya4 };
