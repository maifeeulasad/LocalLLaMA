import React, { lazy, Suspense } from 'react';

const Page1mk7477 = lazy(() => import('./Page'));

const LazyPage1mk7477 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk7477 />
  </Suspense>
);

export { LazyPage1mk7477 };
