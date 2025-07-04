import React, { lazy, Suspense } from 'react';

const Page1lqyd4l = lazy(() => import('./Page'));

const LazyPage1lqyd4l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqyd4l />
  </Suspense>
);

export { LazyPage1lqyd4l };
