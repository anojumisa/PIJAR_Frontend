export default function Resources({
	resources,
}: {
	resources: { id: number; name: string; url: string }[];
}) {
	return (
		<div className="mt-6 bg-white p-4 rounded-lg shadow">
			<h2 className="text-lg font-semibold">Materi Pembelajaran</h2>
			<ul className="mt-4 space-y-2">
				{resources.map((resource) => (
					<li key={resource.id}>
						<a
							href={resource.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 underline"
						>
							{resource.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
