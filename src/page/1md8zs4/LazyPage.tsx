import React, { lazy, Suspense } from 'react';

const Page1md8zs4 = lazy(() => import('./Page'));

const LazyPage1md8zs4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md8zs4 />
  </Suspense>
);

export { LazyPage1md8zs4 };
