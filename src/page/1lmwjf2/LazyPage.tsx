import React, { lazy, Suspense } from 'react';

const Page1lmwjf2 = lazy(() => import('./Page'));

const LazyPage1lmwjf2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmwjf2 />
  </Suspense>
);

export { LazyPage1lmwjf2 };
