import React, { lazy, Suspense } from 'react';

const Page1mkbdqf = lazy(() => import('./Page'));

const LazyPage1mkbdqf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkbdqf />
  </Suspense>
);

export { LazyPage1mkbdqf };
