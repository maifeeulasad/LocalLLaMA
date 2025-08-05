import React, { lazy, Suspense } from 'react';

const Page1mi7sg0 = lazy(() => import('./Page'));

const LazyPage1mi7sg0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi7sg0 />
  </Suspense>
);

export { LazyPage1mi7sg0 };
