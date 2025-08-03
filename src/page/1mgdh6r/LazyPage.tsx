import React, { lazy, Suspense } from 'react';

const Page1mgdh6r = lazy(() => import('./Page'));

const LazyPage1mgdh6r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgdh6r />
  </Suspense>
);

export { LazyPage1mgdh6r };
