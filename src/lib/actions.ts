"use server";

import { getRandom } from "random-useragent";
import { JSDOM } from "jsdom";
import { NodeHtmlMarkdown } from "node-html-markdown";

export async function getJobPostingMarkdown(jobPostingUrl: string) {
  const res = await fetch(jobPostingUrl, {
    headers: {
      "User-Agent": getRandom(),
    },
  });

  const html = await res.text();

  const dom = new JSDOM(html);
  const elements = Array.from(
    dom.window.document.getElementsByClassName("decorated-job-posting__details")
  );

  // Single file
  const str = NodeHtmlMarkdown.translate(elements[0].innerHTML);

  return str;
}
