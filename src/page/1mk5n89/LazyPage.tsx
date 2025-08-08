import React, { lazy, Suspense } from 'react';

const Page1mk5n89 = lazy(() => import('./Page'));

const LazyPage1mk5n89 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk5n89 />
  </Suspense>
);

export { LazyPage1mk5n89 };
