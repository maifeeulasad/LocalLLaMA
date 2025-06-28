import React, { lazy, Suspense } from 'react';

const Page1ll6jo5 = lazy(() => import('./Page'));

const LazyPage1ll6jo5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ll6jo5 />
  </Suspense>
);

export { LazyPage1ll6jo5 };
