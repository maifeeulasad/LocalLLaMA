import React, { lazy, Suspense } from 'react';

const Page1lmf3pl = lazy(() => import('./Page'));

const LazyPage1lmf3pl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmf3pl />
  </Suspense>
);

export { LazyPage1lmf3pl };
