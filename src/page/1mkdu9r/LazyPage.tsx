import React, { lazy, Suspense } from 'react';

const Page1mkdu9r = lazy(() => import('./Page'));

const LazyPage1mkdu9r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkdu9r />
  </Suspense>
);

export { LazyPage1mkdu9r };
