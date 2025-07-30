import React, { lazy, Suspense } from 'react';

const Page1mcxdiu = lazy(() => import('./Page'));

const LazyPage1mcxdiu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcxdiu />
  </Suspense>
);

export { LazyPage1mcxdiu };
