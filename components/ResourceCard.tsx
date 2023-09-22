import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";


interface Props {
    id: string;
    title: string;
    image: string;
    downloadNumber: number;
    slug: string;
    downloadLink: string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`


const ResourceCard = async ({ id, title, image, downloadNumber, slug, downloadLink }: Props) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)
    return (
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
            <Link href={`/resource/${id}`}>
                <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                    <div className="h-fit w-full">
                        <Image
                            src={image}
                            className="h-full w-full rounded-md object-cover"
                            width={384}
                            height={480}
                            alt={title}
                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                        />
                    </div>
                    <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
                </CardHeader>
            </Link>
            <CardContent className="flex-between mt-4 p-0">
               <div className="flex-center body-medium gap-1.5 text-white">
                <Image src="/downloads.svg" width={20} height={20} alt="download" />

                {`${downloadNumber} Downloads`}
               </div>

               <Link href={`/resources/${id}`} className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
                    Donwload Now
                    <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
               </Link>
            </CardContent>
        </Card>

    )
}

export default ResourceCard