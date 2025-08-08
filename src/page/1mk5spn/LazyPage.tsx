import React, { lazy, Suspense } from 'react';

const Page1mk5spn = lazy(() => import('./Page'));

const LazyPage1mk5spn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk5spn />
  </Suspense>
);

export { LazyPage1mk5spn };
