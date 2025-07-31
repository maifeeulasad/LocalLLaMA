import React, { lazy, Suspense } from 'react';

const Page1mdx65u = lazy(() => import('./Page'));

const LazyPage1mdx65u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdx65u />
  </Suspense>
);

export { LazyPage1mdx65u };
