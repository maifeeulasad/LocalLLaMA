import React, { lazy, Suspense } from 'react';

const Page1mkf60c = lazy(() => import('./Page'));

const LazyPage1mkf60c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkf60c />
  </Suspense>
);

export { LazyPage1mkf60c };
