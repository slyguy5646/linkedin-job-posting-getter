"use client";

import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { getJobPostingMarkdown } from "@/lib/actions";
import { useState } from "react";

export default function Home() {
  // https://www.linkedin.com/jobs/view/4117868043
  const [url, setUrl] = useState<string | null>(null);

  const [jd, setJd] = useState<string | null>(null);
  const [jobTitle, setJobTitle] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="bg-white">
      <div className="w-full flex justify-center mt-4">
        <div className="flex justify-center gap-x-2 max-w-[900px] w-full">
          <input
            value={url || ""}
            placeholder="Linked In Job URL ex. https://linkedin.com/jobs/view/{jobId}"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border border-neutral-200 px-3 py-2 rounded-md"
          />
          <button
            disabled={loading}
            className="text-black bg-green-500 rounded-md px-3 py-2 "
            onClick={async () => {
              if (url) {
                setLoading(true);
                const { jobTitle, jobDescription } =
                  await getJobPostingMarkdown(url);
                setJobTitle(jobTitle || null);
                setJd(jobDescription);
              }
              setLoading(false);
            }}
          >
            {loading ? "..." : "Submit"}
          </button>
        </div>
      </div>

      {jd && (
        <div className="text-black flex justify-center w-full mt-8">
          <div className="w-full max-w-[900px]">
            {jobTitle && <div className="pb-4 text-2xl font-semibold text-green-500">{jobTitle}</div>}
            <MarkdownRenderer content={jd} />
          </div>
        </div>
      )}
    </div>
  );
}
