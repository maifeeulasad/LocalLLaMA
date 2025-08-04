import React, { lazy, Suspense } from 'react';

const Page1mgi9df = lazy(() => import('./Page'));

const LazyPage1mgi9df = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgi9df />
  </Suspense>
);

export { LazyPage1mgi9df };
