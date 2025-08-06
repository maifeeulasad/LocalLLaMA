import React, { lazy, Suspense } from 'react';

const Page1mipaft = lazy(() => import('./Page'));

const LazyPage1mipaft = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mipaft />
  </Suspense>
);

export { LazyPage1mipaft };
