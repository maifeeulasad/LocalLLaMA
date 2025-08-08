import React, { lazy, Suspense } from 'react';

const Page1mktg06 = lazy(() => import('./Page'));

const LazyPage1mktg06 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mktg06 />
  </Suspense>
);

export { LazyPage1mktg06 };
