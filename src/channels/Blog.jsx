import { BlogViewer } from './BlogViewer';

export function Blog() {
    return (
        <div className="text-white flex flex-col items-center mx-auto pt-10">
            <h1 className="text-4xl">kxtz' shitty blog</h1>
            <div className="bg-gray-600 h-2 w-8/12 my-2 mx-auto rounded"></div>
            <BlogViewer />
        </div>
    );
};
