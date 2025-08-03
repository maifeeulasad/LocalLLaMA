import React, { lazy, Suspense } from 'react';

const Page1mgeerv = lazy(() => import('./Page'));

const LazyPage1mgeerv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgeerv />
  </Suspense>
);

export { LazyPage1mgeerv };
