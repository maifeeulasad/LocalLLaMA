import React, { lazy, Suspense } from 'react';

const Page1ls0vb7 = lazy(() => import('./Page'));

const LazyPage1ls0vb7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls0vb7 />
  </Suspense>
);

export { LazyPage1ls0vb7 };
