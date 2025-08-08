import React, { lazy, Suspense } from 'react';

const Page1mk1gu7 = lazy(() => import('./Page'));

const LazyPage1mk1gu7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk1gu7 />
  </Suspense>
);

export { LazyPage1mk1gu7 };
