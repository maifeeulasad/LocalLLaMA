import React, { lazy, Suspense } from 'react';

const Page1mipnte = lazy(() => import('./Page'));

const LazyPage1mipnte = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mipnte />
  </Suspense>
);

export { LazyPage1mipnte };
