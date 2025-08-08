import React, { lazy, Suspense } from 'react';

const Page1mknstt = lazy(() => import('./Page'));

const LazyPage1mknstt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mknstt />
  </Suspense>
);

export { LazyPage1mknstt };
