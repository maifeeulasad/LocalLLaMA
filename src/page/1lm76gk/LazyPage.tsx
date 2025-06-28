import React, { lazy, Suspense } from 'react';

const Page1lm76gk = lazy(() => import('./Page'));

const LazyPage1lm76gk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm76gk />
  </Suspense>
);

export { LazyPage1lm76gk };
