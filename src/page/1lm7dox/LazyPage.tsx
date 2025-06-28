import React, { lazy, Suspense } from 'react';

const Page1lm7dox = lazy(() => import('./Page'));

const LazyPage1lm7dox = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm7dox />
  </Suspense>
);

export { LazyPage1lm7dox };
