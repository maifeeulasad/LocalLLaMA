import React, { lazy, Suspense } from 'react';

const Page1mce901 = lazy(() => import('./Page'));

const LazyPage1mce901 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mce901 />
  </Suspense>
);

export { LazyPage1mce901 };
