import Markdown from "react-markdown";

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    //@ts-ignore
    <Markdown
      components={{
        h1: CustomH1,
        h2: CustomH2,
        h3: CustomH3,
        h4: CustomH4,
        h5: CustomH5,
        h6: CustomH6,

        p: CustomParagraph,
        em: CustomEmphasis,
        strong: CustomStrong,
        a: CustomLink,

        // @ts-ignore
        ul: ({ children, ...props }) => (
          <ul className="list-disc pl-6 mb-4" {...props}>
            {/* @ts-ignore */}
            {children}
          </ul>
        ),
      }}
    >
      {content}
    </Markdown>
  );
}

const CustomH1 = ({ children }: any) => (
  <h1 className="text-3xl  py-4 font-New-Spirit">{children}</h1>
);
const CustomH2 = ({ children }: any) => (
  <h2 className="text-2xl font-New-Spirit py-3">{children}</h2>
);
const CustomH3 = ({ children }: any) => (
  <h3 className="text-xl font-New-Spirit py-2">{children}</h3>
);
const CustomH4 = ({ children }: any) => (
  <h4 className="text-lg font-semibold">{children}</h4>
);
const CustomH5 = ({ children }: any) => (
  <h5 className="text-base font-semibold">{children}</h5>
);
const CustomH6 = ({ children }: any) => (
  <h6 className="text-sm font-semibold">{children}</h6>
);

const CustomParagraph = ({ children }: any) => (
  <p className="text-black leading-relaxed mb-4">{children}</p>
);
const CustomEmphasis = ({ children }: any) => (
  <em className="text-black font-semibold">{children}</em>
);
const CustomStrong = ({ children }: any) => (
  <strong className="text-black font-bold">{children}</strong>
);
const CustomLink = ({ href, children }: any) => (
  <a href={href} className="text-main-700 underline" target="_blank">
    {children}
  </a>
);
