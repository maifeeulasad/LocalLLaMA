import React, { lazy, Suspense } from 'react';

const Page1mbejz8 = lazy(() => import('./Page'));

const LazyPage1mbejz8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbejz8 />
  </Suspense>
);

export { LazyPage1mbejz8 };
