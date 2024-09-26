export function getStrapiUrl(path=""){
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL
    return `${baseUrl}${path}`
}