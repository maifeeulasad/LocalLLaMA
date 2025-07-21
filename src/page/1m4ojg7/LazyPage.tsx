import React, { lazy, Suspense } from 'react';

const Page1m4ojg7 = lazy(() => import('./Page'));

const LazyPage1m4ojg7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4ojg7 />
  </Suspense>
);

export { LazyPage1m4ojg7 };
