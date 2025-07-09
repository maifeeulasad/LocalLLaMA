import React, { lazy, Suspense } from 'react';

const Page1lvjxoy = lazy(() => import('./Page'));

const LazyPage1lvjxoy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvjxoy />
  </Suspense>
);

export { LazyPage1lvjxoy };
