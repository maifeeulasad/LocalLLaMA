import React, { lazy, Suspense } from 'react';

const Page1mdxihp = lazy(() => import('./Page'));

const LazyPage1mdxihp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdxihp />
  </Suspense>
);

export { LazyPage1mdxihp };
