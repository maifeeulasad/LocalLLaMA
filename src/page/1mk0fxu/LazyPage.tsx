import React, { lazy, Suspense } from 'react';

const Page1mk0fxu = lazy(() => import('./Page'));

const LazyPage1mk0fxu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk0fxu />
  </Suspense>
);

export { LazyPage1mk0fxu };
