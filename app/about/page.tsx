import { Section } from "@/components/Section";
import Link from "next/link";
import { TechStack } from "@/components/TechStack";

export default function AboutPage() {
    return (
        <Section title="About Me" kicker="Beyond the code">
            <div className="prose prose-invert prose-zinc max-w-none">

                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="flex-1">
                        <p className="text-lg leading-relaxed text-zinc-300">
                            Hi, I'm <strong className="text-white">Aditya Kher</strong>. I'm a software engineer who loves building systems that scale and products that solve real problems.
                        </p>
                        <p className="mt-4 text-zinc-300">
                            Whether it's designing a failsafe SOS alert system or optimizing database queries to run 95% faster, I obsess over the details that make software reliable and delightful.
                        </p>
                        <p className="mt-4 text-zinc-300">
                            Currently, I'm focused on <strong>.NET 8, Node.js, and cloud architecture</strong>. I enjoy taking ownership of projects from the initial "what if" conversation all the way to production monitoring.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-semibold text-zinc-100 mt-12 mb-6">Experience & Education</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h4 className="font-semibold text-zinc-200 mb-4">Education</h4>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-medium text-white">Bachelor of Technology (CS)</div>
                                <div className="text-sm text-zinc-400">Your University Name • 2020 - 2024</div>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h4 className="font-semibold text-zinc-200 mb-4">What I'm Learning</h4>
                        <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
                            <li>Advanced Microservices Patterns</li>
                            <li>System Design (High Scalability)</li>
                            <li>React Native Fabric Architecture</li>
                        </ul>
                    </div>
                </div>


                <h3 className="text-xl font-semibold text-zinc-100 mt-12 mb-6">My Toolkit</h3>
                <TechStack />

                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold text-zinc-100 mb-4">Let's build something together</h3>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
                    >
                        Get in touch
                    </Link>
                </div>

            </div>
        </Section>
    );
}
