import React, { lazy, Suspense } from 'react';

const Page1lzql0b = lazy(() => import('./Page'));

const LazyPage1lzql0b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzql0b />
  </Suspense>
);

export { LazyPage1lzql0b };
