import React, { lazy, Suspense } from 'react';

const Page1luy711 = lazy(() => import('./Page'));

const LazyPage1luy711 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luy711 />
  </Suspense>
);

export { LazyPage1luy711 };
