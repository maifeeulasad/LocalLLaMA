import React, { lazy, Suspense } from 'react';

const Page1mcoou9 = lazy(() => import('./Page'));

const LazyPage1mcoou9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcoou9 />
  </Suspense>
);

export { LazyPage1mcoou9 };
