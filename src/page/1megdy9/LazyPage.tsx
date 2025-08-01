import React, { lazy, Suspense } from 'react';

const Page1megdy9 = lazy(() => import('./Page'));

const LazyPage1megdy9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1megdy9 />
  </Suspense>
);

export { LazyPage1megdy9 };
