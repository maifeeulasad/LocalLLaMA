import React, { lazy, Suspense } from 'react';

const Page1mg0ur7 = lazy(() => import('./Page'));

const LazyPage1mg0ur7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg0ur7 />
  </Suspense>
);

export { LazyPage1mg0ur7 };
