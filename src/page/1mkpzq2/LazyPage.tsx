import React, { lazy, Suspense } from 'react';

const Page1mkpzq2 = lazy(() => import('./Page'));

const LazyPage1mkpzq2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkpzq2 />
  </Suspense>
);

export { LazyPage1mkpzq2 };
