import { techStack } from "@/data/tech-stack";
import { Badge } from "@/components/Badge";

export function TechStack() {
    const categories = Array.from(new Set(techStack.map((t) => t.category)));

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
                <div
                    key={category}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                    <h3 className="mb-4 text-sm font-semibold text-zinc-200">
                        {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack
                            .filter((t) => t.category === category)
                            .map((t) => (
                                <Badge key={t.name}>{t.name}</Badge>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
