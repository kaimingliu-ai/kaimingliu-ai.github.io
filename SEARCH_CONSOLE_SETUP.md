# Google Search Console setup

Follow these steps after `https://kaimingliu-ai.github.io/` is live. The new host needs its own URL-prefix property; owning the former property does not verify the new one.

1. Open [Google Search Console](https://search.google.com/search-console/) and sign in.
2. Add a **URL-prefix** property for `https://kaimingliu-ai.github.io/`.
3. Obtain the exact HTML verification file or HTML meta tag from Search Console. For the file method, put the downloaded file in `public/` without renaming or editing it, deploy, then click **Verify**. For the tag method, put Google's exact tag in the homepage `<head>` in `src/layouts/Page.astro`, deploy, then click **Verify**. Keep the verification file/tag afterward; do not invent a token.
4. Use **URL Inspection** for `https://kaimingliu-ai.github.io/`, then **Test live URL**.
5. Click **Request Indexing** for the homepage.
6. Open **Sitemaps** and submit `sitemap.xml` for this property: `https://kaimingliu-ai.github.io/sitemap.xml`.
7. Check **Page indexing**, **URL Inspection**, and **Settings → Crawl stats** later for crawl/indexing status or reported problems.

## Migration from the former host

The former homepage was `https://kl543.github.io/`. Test that URL and the former CV URL after the GitHub account and Pages repository are renamed, and record their HTTP status and redirect destination. GitHub's repository redirects do not establish that a Pages hostname redirects. Account renaming removes control of the former username's Pages hostname, so this repository cannot supply or guarantee a permanent redirect there. The legacy routes within the new host still redirect to the existing homepage anchors.

Google's **Change of Address** tool requires verified ownership of the old and new properties and working permanent redirects. Use it only if those prerequisites can actually be satisfied. If the old Pages host returns 404 or cannot be controlled, do not claim the tool was completed or invent a redirect; verify the new property, submit its sitemap, request homepage indexing, and update external profile links to the new URL. Retain any existing old-property ownership evidence. Indexing and rankings are not guaranteed by correct metadata or sitemap submission.

References: [GitHub username changes](https://docs.github.com/en/account-and-profile/concepts/username-changes), [renaming a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository), [Google Change of Address](https://support.google.com/webmasters/answer/9370220), and [moving a site with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).
