import React, { lazy, Suspense } from 'react';

const Page1lvkdxg = lazy(() => import('./Page'));

const LazyPage1lvkdxg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvkdxg />
  </Suspense>
);

export { LazyPage1lvkdxg };
