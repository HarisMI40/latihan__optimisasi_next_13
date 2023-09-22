import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  
const LoadingCard = () => {
  return (
    new Array(3).fill(0).map((_, i) => (
        <Card className="w-full max-w-fit border-0 h-[583px] animate-pulse bg-gray-400 sm:max-w-[356px]">

          <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <div className="h-fit w-full">

            </div>
          </CardHeader>
          <CardContent className="flex-between mt-4 p-0">
            <div className="flex-center body-medium gap-1.5 text-white">

            </div>
          </CardContent>
        </Card>
      ))
  )
}

export default LoadingCard