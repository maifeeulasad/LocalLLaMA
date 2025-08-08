import React, { lazy, Suspense } from 'react';

const Page1mk279x = lazy(() => import('./Page'));

const LazyPage1mk279x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk279x />
  </Suspense>
);

export { LazyPage1mk279x };
