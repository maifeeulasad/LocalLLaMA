import React, { lazy, Suspense } from 'react';

const Page1mk8085 = lazy(() => import('./Page'));

const LazyPage1mk8085 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk8085 />
  </Suspense>
);

export { LazyPage1mk8085 };
