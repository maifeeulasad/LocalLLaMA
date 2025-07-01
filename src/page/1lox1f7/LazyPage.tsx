import React, { lazy, Suspense } from 'react';

const Page1lox1f7 = lazy(() => import('./Page'));

const LazyPage1lox1f7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lox1f7 />
  </Suspense>
);

export { LazyPage1lox1f7 };
