import React, { lazy, Suspense } from 'react';

const Page1lvkigw = lazy(() => import('./Page'));

const LazyPage1lvkigw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvkigw />
  </Suspense>
);

export { LazyPage1lvkigw };
