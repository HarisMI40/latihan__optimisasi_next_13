import { getResources } from '@/sanity/actions';
import React, { Suspense } from 'react'
import ResourceCard from './ResourceCard';

interface Props {
    searchParams: { [key: string]: string | undefined }
}

const Resources = async ({ searchParams }: Props) => {

    const resources = await getResources({
        query: searchParams?.query || '',
        category: searchParams?.category || '',
        page: '1'
    });

    return (
        <>
            {resources?.length > 0 ? (
                resources.map((resource: any) => (
                        <ResourceCard
                            key={resource._id}
                            title={resource.title}
                            slug={resource.slug}
                            id={resource._id}
                            image={resource.image}
                            downloadNumber={resource.views}
                            downloadLink={resource.downloadLink}
                        />
                ))
            ) : (
                <p className="body-regular text-white-400">
                    No resources found
                </p>
            )}
        </>
    )
}

export default Resources