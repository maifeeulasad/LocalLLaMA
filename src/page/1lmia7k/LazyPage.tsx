import React, { lazy, Suspense } from 'react';

const Page1lmia7k = lazy(() => import('./Page'));

const LazyPage1lmia7k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmia7k />
  </Suspense>
);

export { LazyPage1lmia7k };
