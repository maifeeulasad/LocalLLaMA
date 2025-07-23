import React, { lazy, Suspense } from 'react';

const Page1m75afx = lazy(() => import('./Page'));

const LazyPage1m75afx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m75afx />
  </Suspense>
);

export { LazyPage1m75afx };
