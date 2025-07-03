import React, { lazy, Suspense } from 'react';

const Page1lpyt3t = lazy(() => import('./Page'));

const LazyPage1lpyt3t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpyt3t />
  </Suspense>
);

export { LazyPage1lpyt3t };
