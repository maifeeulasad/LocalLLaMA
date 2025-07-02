import React, { lazy, Suspense } from 'react';

const Page1lpejnj = lazy(() => import('./Page'));

const LazyPage1lpejnj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpejnj />
  </Suspense>
);

export { LazyPage1lpejnj };
