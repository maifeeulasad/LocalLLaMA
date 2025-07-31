import React, { lazy, Suspense } from 'react';

const Page1mdf6l4 = lazy(() => import('./Page'));

const LazyPage1mdf6l4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdf6l4 />
  </Suspense>
);

export { LazyPage1mdf6l4 };
