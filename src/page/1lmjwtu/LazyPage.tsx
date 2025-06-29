import React, { lazy, Suspense } from 'react';

const Page1lmjwtu = lazy(() => import('./Page'));

const LazyPage1lmjwtu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmjwtu />
  </Suspense>
);

export { LazyPage1lmjwtu };
