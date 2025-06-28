import React, { lazy, Suspense } from 'react';

const Page1lm24xd = lazy(() => import('./Page'));

const LazyPage1lm24xd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm24xd />
  </Suspense>
);

export { LazyPage1lm24xd };
