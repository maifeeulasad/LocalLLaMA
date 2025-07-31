import React, { lazy, Suspense } from 'react';

const Page1mdqlc6 = lazy(() => import('./Page'));

const LazyPage1mdqlc6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdqlc6 />
  </Suspense>
);

export { LazyPage1mdqlc6 };
