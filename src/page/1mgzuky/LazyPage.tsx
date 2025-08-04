import React, { lazy, Suspense } from 'react';

const Page1mgzuky = lazy(() => import('./Page'));

const LazyPage1mgzuky = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgzuky />
  </Suspense>
);

export { LazyPage1mgzuky };
