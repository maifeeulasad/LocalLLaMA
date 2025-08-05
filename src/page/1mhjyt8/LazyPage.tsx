import React, { lazy, Suspense } from 'react';

const Page1mhjyt8 = lazy(() => import('./Page'));

const LazyPage1mhjyt8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhjyt8 />
  </Suspense>
);

export { LazyPage1mhjyt8 };
