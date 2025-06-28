import React, { lazy, Suspense } from 'react';

const Page1lkz0hg = lazy(() => import('./Page'));

const LazyPage1lkz0hg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lkz0hg />
  </Suspense>
);

export { LazyPage1lkz0hg };
