import React, { lazy, Suspense } from 'react';

const Page1ln5jli = lazy(() => import('./Page'));

const LazyPage1ln5jli = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln5jli />
  </Suspense>
);

export { LazyPage1ln5jli };
