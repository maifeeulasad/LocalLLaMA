import React, { lazy, Suspense } from 'react';

const Page1meuqfw = lazy(() => import('./Page'));

const LazyPage1meuqfw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meuqfw />
  </Suspense>
);

export { LazyPage1meuqfw };
