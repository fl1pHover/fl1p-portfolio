'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function FollowBot() {
  return (
    <div className="w-full h-[300px]">
      {/* <Spline scene="https://prod.spline.design/gs8cQ80dTKZMQ30S/scene.splinecode" className='h-[500px]' /> */}
      <Spline  scene="https://prod.spline.design/013kkfP4ihb0tG8C/scene.splinecode" />
    </div>
  );
}
