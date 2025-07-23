import React, { lazy, Suspense } from 'react';

const Page1m6hck1 = lazy(() => import('./Page'));

const LazyPage1m6hck1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6hck1 />
  </Suspense>
);

export { LazyPage1m6hck1 };
