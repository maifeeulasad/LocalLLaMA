import React, { lazy, Suspense } from 'react';

const Page1mcuziy = lazy(() => import('./Page'));

const LazyPage1mcuziy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcuziy />
  </Suspense>
);

export { LazyPage1mcuziy };
