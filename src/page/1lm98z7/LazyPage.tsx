import React, { lazy, Suspense } from 'react';

const Page1lm98z7 = lazy(() => import('./Page'));

const LazyPage1lm98z7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm98z7 />
  </Suspense>
);

export { LazyPage1lm98z7 };
