import React, { lazy, Suspense } from 'react';

const Page1lw5nxi = lazy(() => import('./Page'));

const LazyPage1lw5nxi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw5nxi />
  </Suspense>
);

export { LazyPage1lw5nxi };
