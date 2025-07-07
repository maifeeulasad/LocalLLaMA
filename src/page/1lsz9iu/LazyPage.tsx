import React, { lazy, Suspense } from 'react';

const Page1lsz9iu = lazy(() => import('./Page'));

const LazyPage1lsz9iu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsz9iu />
  </Suspense>
);

export { LazyPage1lsz9iu };
