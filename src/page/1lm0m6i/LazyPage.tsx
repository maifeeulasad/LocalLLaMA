import React, { lazy, Suspense } from 'react';

const Page1lm0m6i = lazy(() => import('./Page'));

const LazyPage1lm0m6i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm0m6i />
  </Suspense>
);

export { LazyPage1lm0m6i };
