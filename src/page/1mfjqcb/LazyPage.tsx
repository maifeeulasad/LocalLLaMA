import React, { lazy, Suspense } from 'react';

const Page1mfjqcb = lazy(() => import('./Page'));

const LazyPage1mfjqcb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfjqcb />
  </Suspense>
);

export { LazyPage1mfjqcb };
