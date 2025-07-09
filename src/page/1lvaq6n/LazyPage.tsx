import React, { lazy, Suspense } from 'react';

const Page1lvaq6n = lazy(() => import('./Page'));

const LazyPage1lvaq6n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvaq6n />
  </Suspense>
);

export { LazyPage1lvaq6n };
