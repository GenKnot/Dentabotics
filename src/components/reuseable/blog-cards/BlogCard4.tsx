import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "../links/NextLink";

// ======================================================
interface BlogCard4Props {
    image: string;
    title: string;
    className?: string;
    description: string;
}

// ======================================================

export default function BlogCard4(props: BlogCard4Props) {
    const {image, title, description, className = "card"} = props;

    return (
        <article>
            <div className={className}>
                <figure className="card-img-top overlay overlay-1 hover-scale">
                    <Image width={560} height={350} src={image} alt={title} className="w-100 h-auto"/>
                    <span className="bg"/>
                </figure>

                <div className="card-body">
                    <div className="post-header">
                        <h2 className="post-title h3 mt-1 mb-3">
                            <NextLink title={title} className="link-dark" href="#"/>
                        </h2>
                    </div>

                    <div className="post-content">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
