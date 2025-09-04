
export function generateSlug(title) {
    return title
        .toLowerCase()        // lowercase
        .trim()               // remove leading/trailing spaces
        .replace(/\s+/g, "-") // spaces → hyphens
        .replace(/[^\w-]+/g, ""); // remove special chars
}