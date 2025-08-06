import React, { lazy, Suspense } from 'react';

const Page1mj0snp = lazy(() => import('./Page'));

const LazyPage1mj0snp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj0snp />
  </Suspense>
);

export { LazyPage1mj0snp };
