import React, { lazy, Suspense } from 'react';

const Page1mk5mfw = lazy(() => import('./Page'));

const LazyPage1mk5mfw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk5mfw />
  </Suspense>
);

export { LazyPage1mk5mfw };
