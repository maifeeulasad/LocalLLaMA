import React, { lazy, Suspense } from 'react';

const Page1lt7zl8 = lazy(() => import('./Page'));

const LazyPage1lt7zl8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt7zl8 />
  </Suspense>
);

export { LazyPage1lt7zl8 };
