import React, { lazy, Suspense } from 'react';

const Page1mdnzym = lazy(() => import('./Page'));

const LazyPage1mdnzym = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdnzym />
  </Suspense>
);

export { LazyPage1mdnzym };
