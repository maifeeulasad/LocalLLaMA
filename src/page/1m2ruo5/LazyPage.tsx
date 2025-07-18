import React, { lazy, Suspense } from 'react';

const Page1m2ruo5 = lazy(() => import('./Page'));

const LazyPage1m2ruo5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2ruo5 />
  </Suspense>
);

export { LazyPage1m2ruo5 };
