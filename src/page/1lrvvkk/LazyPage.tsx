import React, { lazy, Suspense } from 'react';

const Page1lrvvkk = lazy(() => import('./Page'));

const LazyPage1lrvvkk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrvvkk />
  </Suspense>
);

export { LazyPage1lrvvkk };
