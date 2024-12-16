export default function Resources({
	resources,
}: {
	resources: { id: number; name: string; url: string }[];
}) {
	return (
		<div className="mt-6 bg-neutral-300  p-4 rounded-lg shadow border border-neutral-200">
			<h2 className="text-lg text-neutral-800 font-semibold">Materi Pembelajaran</h2>
			<ul className="mt-4 space-y-2">
				{resources.map((resource) => (
					<li key={resource.id}>
						<a
							href={resource.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-yellow-600 underline"
						>
							{resource.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
