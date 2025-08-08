import React, { lazy, Suspense } from 'react';

const Page1mkdvhu = lazy(() => import('./Page'));

const LazyPage1mkdvhu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkdvhu />
  </Suspense>
);

export { LazyPage1mkdvhu };
