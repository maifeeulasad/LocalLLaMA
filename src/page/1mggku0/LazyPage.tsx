import React, { lazy, Suspense } from 'react';

const Page1mggku0 = lazy(() => import('./Page'));

const LazyPage1mggku0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mggku0 />
  </Suspense>
);

export { LazyPage1mggku0 };
