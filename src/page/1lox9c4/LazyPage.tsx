import React, { lazy, Suspense } from 'react';

const Page1lox9c4 = lazy(() => import('./Page'));

const LazyPage1lox9c4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lox9c4 />
  </Suspense>
);

export { LazyPage1lox9c4 };
