import React, { lazy, Suspense } from 'react';

const Page1mk58p9 = lazy(() => import('./Page'));

const LazyPage1mk58p9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk58p9 />
  </Suspense>
);

export { LazyPage1mk58p9 };
