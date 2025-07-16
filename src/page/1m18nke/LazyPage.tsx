import React, { lazy, Suspense } from 'react';

const Page1m18nke = lazy(() => import('./Page'));

const LazyPage1m18nke = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m18nke />
  </Suspense>
);

export { LazyPage1m18nke };
