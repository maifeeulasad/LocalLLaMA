import React, { lazy, Suspense } from 'react';

const Page1lubwky = lazy(() => import('./Page'));

const LazyPage1lubwky = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lubwky />
  </Suspense>
);

export { LazyPage1lubwky };
