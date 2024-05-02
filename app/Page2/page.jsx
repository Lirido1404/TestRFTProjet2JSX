import React, { Suspense } from 'react'
import FetchDataComp from '../(components)/FetchDataComp'
import Link from "next/link"
function page() {
  return (
    <div>
        <p className='font-bold text-center text-black text-2xl'>Page 2</p>
        <Suspense fallback={<> <p className='text-4xl text-red-500 font-bold'>Loading Data...</p> </>}>
            <FetchDataComp/>
        </Suspense>
        <Link className='bg-green-500 px-4 py-2' href={'/'}>
        Go back 
        </Link>
    </div>
  )
}

export default page