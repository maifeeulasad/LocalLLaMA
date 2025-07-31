import React, { lazy, Suspense } from 'react';

const Page1mdsgax = lazy(() => import('./Page'));

const LazyPage1mdsgax = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdsgax />
  </Suspense>
);

export { LazyPage1mdsgax };
