import React, { lazy, Suspense } from 'react';

const Page1mgqkjt = lazy(() => import('./Page'));

const LazyPage1mgqkjt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgqkjt />
  </Suspense>
);

export { LazyPage1mgqkjt };
