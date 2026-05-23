import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-4">
      <h1 className="text-3xl font-bold mb-4">AgentBlit Documentation</h1>
      <p className="text-fd-muted-foreground mb-6 max-w-lg mx-auto">
        Guides, API references, and tutorials for building with AgentBlit.
      </p>
      <p>
        <Link
          href="/docs"
          className="inline-flex items-center rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
        >
          Browse docs
        </Link>
      </p>
    </div>
  );
}
