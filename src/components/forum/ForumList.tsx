"use client";

import { useEffect, useState } from "react";
import navbar from "../navbar/navbar";
import Footer from "../landing-page/Footer";

interface ForumDiscussion {
    forumId : number;
    forumTitle : string;
    forumDescription : string;
}

const ForumList = () => {
    const [forumList, setForumList] = useState<ForumDiscussion[]>([]);

    return (
        <div className="block relative cursor-pointer group bg-neutral-100 hover:bg-neutral-200 focus-within:bg-neutral-200 rounded-lg px-4 py-1 my-1 sm:px-2 sm:py-0">

        </div>
    ) 
};

export default ForumList;