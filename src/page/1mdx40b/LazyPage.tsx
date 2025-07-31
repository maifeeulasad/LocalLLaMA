import React, { lazy, Suspense } from 'react';

const Page1mdx40b = lazy(() => import('./Page'));

const LazyPage1mdx40b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdx40b />
  </Suspense>
);

export { LazyPage1mdx40b };
