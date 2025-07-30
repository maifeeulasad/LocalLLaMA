import React, { lazy, Suspense } from 'react';

const Page1md4atg = lazy(() => import('./Page'));

const LazyPage1md4atg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md4atg />
  </Suspense>
);

export { LazyPage1md4atg };
