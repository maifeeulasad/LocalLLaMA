import React, { lazy, Suspense } from 'react';

const Page1mk6jkp = lazy(() => import('./Page'));

const LazyPage1mk6jkp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk6jkp />
  </Suspense>
);

export { LazyPage1mk6jkp };
