import React, { lazy, Suspense } from 'react';

const Page1mkon92 = lazy(() => import('./Page'));

const LazyPage1mkon92 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkon92 />
  </Suspense>
);

export { LazyPage1mkon92 };
