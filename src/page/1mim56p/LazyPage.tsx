import React, { lazy, Suspense } from 'react';

const Page1mim56p = lazy(() => import('./Page'));

const LazyPage1mim56p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mim56p />
  </Suspense>
);

export { LazyPage1mim56p };
