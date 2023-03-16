const Tags = () => {

    const tags = [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "NextJS",
    ]
    return (
        <ul className="flex gap-2">
            {tags.map((tag, index) => {
                return (
                    <li className=" px-2 py-1 font-bold bg-gray-200 dark:text-black w-min rounded-lg">
                        {tag}
                </li> 
                )
            }
            )}
	</ul>
    )
}

export default Tags;