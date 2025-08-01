import React, { lazy, Suspense } from 'react';

const Page1meuqm6 = lazy(() => import('./Page'));

const LazyPage1meuqm6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meuqm6 />
  </Suspense>
);

export { LazyPage1meuqm6 };
