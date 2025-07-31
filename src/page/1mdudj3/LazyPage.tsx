import React, { lazy, Suspense } from 'react';

const Page1mdudj3 = lazy(() => import('./Page'));

const LazyPage1mdudj3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdudj3 />
  </Suspense>
);

export { LazyPage1mdudj3 };
