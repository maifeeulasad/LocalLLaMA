import React, { lazy, Suspense } from 'react';

const Page1mifuqk = lazy(() => import('./Page'));

const LazyPage1mifuqk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mifuqk />
  </Suspense>
);

export { LazyPage1mifuqk };
