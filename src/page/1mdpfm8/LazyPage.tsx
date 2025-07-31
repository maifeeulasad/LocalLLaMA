import React, { lazy, Suspense } from 'react';

const Page1mdpfm8 = lazy(() => import('./Page'));

const LazyPage1mdpfm8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdpfm8 />
  </Suspense>
);

export { LazyPage1mdpfm8 };
