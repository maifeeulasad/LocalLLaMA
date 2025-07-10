import React, { lazy, Suspense } from 'react';

const Page1lvr711 = lazy(() => import('./Page'));

const LazyPage1lvr711 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvr711 />
  </Suspense>
);

export { LazyPage1lvr711 };
