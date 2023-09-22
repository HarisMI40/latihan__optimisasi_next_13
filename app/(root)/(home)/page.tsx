import Filter from '@/components/Filter'
import Header from '@/components/Header'
import LoadingCard from '@/components/LoadingCard'
import Resources from '@/components/Resources'
import SearchForm from '@/components/SearchForm'
import React, { Suspense } from 'react'


interface Props {
  searchParams: { [key: string]: string | undefined }
}

const page = async ({ searchParams }: Props) => {


  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">HOme</h1>
        </div>
        <SearchForm />
      </section>
      <Filter />

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query}
            category={searchParams?.category}
          />

          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            <Suspense fallback={<LoadingCard />}>
              <Resources searchParams={searchParams} />
            </Suspense>
          </div>
        </section>



      )}

    </main>
  )
}

export default page