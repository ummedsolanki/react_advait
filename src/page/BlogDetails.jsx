// import { useLocation, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import parse from "html-react-parser";

// export default function BlogDetails() {
//     const { type, id } = useParams();
//     const location = useLocation();
//     const [blogData, setBlogData] = useState(location.state?.item || null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchDetails() {
//             try {
//                 setLoading(true);
//                 const res = await fetch(
//                     `http://172.16.5.23:5000/api/${type}/details/${id}`
//                 );
//                 const data = await res.json();
//                 setBlogData(data?.service);
//             } catch (err) {
//                 console.error(`Error fetching ${type} details:`, err);
//             } finally {
//                 setLoading(false);
//             }
//         }

//         fetchDetails();
//     }, [id, type]);

//     if (loading) return <p>Loading...</p>;
//     if (!blogData) return <p>No data found.</p>;

//     // ✅ Step 1: Unescape \" → "
//     let cleanedDescription = blogData.description?.replace(/\\"/g, '"');

//     // ✅ Step 2: Convert className → class
//     cleanedDescription = cleanedDescription?.replace(/className=/g, "class=");

//     return (
//         <>
//             <div className="video-banner mobile-image-wrapper-ext-80">
//                 <img
//                     className="video-bg"
//                     src={
//                         blogData.imageUrl ||
//                         blogData.src ||
//                         (blogData.image &&
//                             `${import.meta.env.VITE_BACKEND_API_URL}/uploads/${blogData.image}`) ||
//                         ""
//                     }
//                     alt={blogData.title}
//                 />
//                 <div className="video-overlay">
//                     <h1 className="industries-title">{blogData.title}</h1>
//                 </div>
//             </div>

//             {/* ✅ Now parsed correctly */}
//             {parse(cleanedDescription || "")}
//         </>
//     );
// }


import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import parse from "html-react-parser";

export default function BlogDetails() {
    const { type, id } = useParams();
    const location = useLocation();
    const [blogData, setBlogData] = useState(location.state?.item || null);
    const [loading, setLoading] = useState(true);
    const fetched = useRef(false);
    console.log(blogData);
    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;
        async function fetchDetails() {
            try {
                setLoading(true);
                const res = await fetch(
                    `${import.meta.env.VITE_BACKEND_API_URL}/api/${type}/details/${id}`
                );
                const data = await res.json();

                setBlogData(
                    type === "services" ? data?.service :
                        type === "blogs" ? data :
                            type === "solutions" ? data?.solution :
                                null
                );
            } catch (err) {
                console.error(`Error fetching ${type} details:`, err);
            } finally {
                setLoading(false);
            }
        }


        fetchDetails();
    }, [id, type]);

    if (loading) return <p>Loading...</p>;
    if (!blogData) return <p>No data found.</p>;

    return (
        <>
            <div className="video-banner mobile-image-wrapper-ext-80">
                <img
                    className="video-bg"
                    src={blogData.image || blogData.src || blogData.image || ""}
                    alt={blogData.title}
                />

                <div className="video-overlay">
                    <h1 className="industries-title">{blogData.title}</h1>
                </div>
            </div>
            {parse(blogData.description || "")}
        </>
    );
}
