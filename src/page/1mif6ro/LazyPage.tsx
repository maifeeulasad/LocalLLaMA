import React, { lazy, Suspense } from 'react';

const Page1mif6ro = lazy(() => import('./Page'));

const LazyPage1mif6ro = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mif6ro />
  </Suspense>
);

export { LazyPage1mif6ro };
