import React, { lazy, Suspense } from 'react';

const Page1lw72q8 = lazy(() => import('./Page'));

const LazyPage1lw72q8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw72q8 />
  </Suspense>
);

export { LazyPage1lw72q8 };
