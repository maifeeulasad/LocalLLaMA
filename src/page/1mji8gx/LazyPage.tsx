import React, { lazy, Suspense } from 'react';

const Page1mji8gx = lazy(() => import('./Page'));

const LazyPage1mji8gx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mji8gx />
  </Suspense>
);

export { LazyPage1mji8gx };
