import React, { lazy, Suspense } from 'react';

const Page1lm17p6 = lazy(() => import('./Page'));

const LazyPage1lm17p6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm17p6 />
  </Suspense>
);

export { LazyPage1lm17p6 };
