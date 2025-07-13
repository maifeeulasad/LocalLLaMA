import React, { lazy, Suspense } from 'react';

const Page1ly1d7v = lazy(() => import('./Page'));

const LazyPage1ly1d7v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly1d7v />
  </Suspense>
);

export { LazyPage1ly1d7v };
