import React, { lazy, Suspense } from 'react';

const Page1lvx088 = lazy(() => import('./Page'));

const LazyPage1lvx088 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvx088 />
  </Suspense>
);

export { LazyPage1lvx088 };
