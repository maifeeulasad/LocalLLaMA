import React, { lazy, Suspense } from 'react';

const Page1mgc0v0 = lazy(() => import('./Page'));

const LazyPage1mgc0v0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgc0v0 />
  </Suspense>
);

export { LazyPage1mgc0v0 };
