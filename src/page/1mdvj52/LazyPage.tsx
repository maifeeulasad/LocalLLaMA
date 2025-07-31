import React, { lazy, Suspense } from 'react';

const Page1mdvj52 = lazy(() => import('./Page'));

const LazyPage1mdvj52 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdvj52 />
  </Suspense>
);

export { LazyPage1mdvj52 };
