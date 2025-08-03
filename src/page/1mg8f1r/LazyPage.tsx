import React, { lazy, Suspense } from 'react';

const Page1mg8f1r = lazy(() => import('./Page'));

const LazyPage1mg8f1r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg8f1r />
  </Suspense>
);

export { LazyPage1mg8f1r };
