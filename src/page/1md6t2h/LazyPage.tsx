import React, { lazy, Suspense } from 'react';

const Page1md6t2h = lazy(() => import('./Page'));

const LazyPage1md6t2h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md6t2h />
  </Suspense>
);

export { LazyPage1md6t2h };
