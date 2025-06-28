import React, { lazy, Suspense } from 'react';

const Page1jgap0q = lazy(() => import('./Page'));

const LazyPage1jgap0q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jgap0q />
  </Suspense>
);

export { LazyPage1jgap0q };
