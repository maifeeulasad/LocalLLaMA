import React, { lazy, Suspense } from 'react';

const Page1mgrhcp = lazy(() => import('./Page'));

const LazyPage1mgrhcp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgrhcp />
  </Suspense>
);

export { LazyPage1mgrhcp };
