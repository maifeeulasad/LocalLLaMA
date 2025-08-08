import React, { lazy, Suspense } from 'react';

const Page1mk2ubd = lazy(() => import('./Page'));

const LazyPage1mk2ubd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk2ubd />
  </Suspense>
);

export { LazyPage1mk2ubd };
