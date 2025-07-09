import React, { lazy, Suspense } from 'react';

const Page1lv94fb = lazy(() => import('./Page'));

const LazyPage1lv94fb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv94fb />
  </Suspense>
);

export { LazyPage1lv94fb };
