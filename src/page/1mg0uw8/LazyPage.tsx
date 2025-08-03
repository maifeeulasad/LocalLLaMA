import React, { lazy, Suspense } from 'react';

const Page1mg0uw8 = lazy(() => import('./Page'));

const LazyPage1mg0uw8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg0uw8 />
  </Suspense>
);

export { LazyPage1mg0uw8 };
