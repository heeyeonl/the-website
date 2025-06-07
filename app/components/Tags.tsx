export default function Tags({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
                <span key={tag} className="bg-[var(--ui-black)]/10 text-[var(--ui-black)] text-xs font-medium px-2.5 py-0.5 rounded">
                    {tag}
                </span>
            ))}
        </div>
    )
}