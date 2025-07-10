import React, { lazy, Suspense } from 'react';

const Page1lw8lvt = lazy(() => import('./Page'));

const LazyPage1lw8lvt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw8lvt />
  </Suspense>
);

export { LazyPage1lw8lvt };
