import React, { lazy, Suspense } from 'react';

const Page1mi3has = lazy(() => import('./Page'));

const LazyPage1mi3has = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi3has />
  </Suspense>
);

export { LazyPage1mi3has };
