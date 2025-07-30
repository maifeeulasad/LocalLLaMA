import React, { lazy, Suspense } from 'react';

const Page1md1fka = lazy(() => import('./Page'));

const LazyPage1md1fka = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md1fka />
  </Suspense>
);

export { LazyPage1md1fka };
