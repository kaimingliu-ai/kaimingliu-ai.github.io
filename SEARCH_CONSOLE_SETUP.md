# Google Search Console status and monitoring

The URL-prefix property is [https://kaimingliu-ai.github.io/](https://search.google.com/search-console?resource_id=https%3A%2F%2Fkaimingliu-ai.github.io%2F). The following results were observed in the official Search Console on October 10, 2026; they are a dated record, not a claim about future indexing status.

| State | Confirmed result |
| --- | --- |
| Technically indexable | Homepage live test: **URL is available to Google** / **Page can be indexed**. Crawl allowed: Yes; page fetch: Successful; indexing allowed: Yes. User-declared canonical is the new homepage. One valid ProfilePage item was detected. |
| Ownership verified | **Ownership verified**, using Google's downloaded HTML file. |
| Sitemap submitted | **Sitemap submitted successfully** for `https://kaimingliu-ai.github.io/sitemap.xml`. The processing report initially showed **Couldn't fetch**, including after one diagnostic resubmission. A separate Google live test of the sitemap succeeded. Processing success remains unconfirmed. |
| Indexing requested | **Indexing requested**; Google confirmed that the homepage was added to a priority crawl queue. One homepage request was made. |
| Actually indexed | A subsequent **Google Index** inspection confirmed **URL is on Google** / **Page is indexed**. Last crawl was reported as October 10, 2026, 4:03:41 AM by **Googlebot smartphone**, with a successful fetch and indexing allowed. Google-selected canonical: **Inspected URL**, the new homepage. |

The initial inspection showed **URL is unknown to Google** with no recorded crawl. The later indexed result above is the evidence for actual indexing; the successful live test and indexing request alone would not establish that result. Sitemap processing still reports **Couldn't fetch**, independently of the confirmed homepage indexing.

The exact downloaded verification file is committed at `public/googlec34e4b398265e454.html` and deployed at [its root URL](https://kaimingliu-ai.github.io/googlec34e4b398265e454.html). Keep its filename and bytes unchanged, and retain it in every deployment to preserve ownership. Do not add tracking scripts or generate replacement tokens. Search Console account details and private diagnostics are not stored in this repository.

The homepage, robots, sitemap, and both CV download addresses returned HTTP 200. The sitemap is valid XML and contains the canonical homepage only. Public GitHub profile and repository homepage links point to the new website. No robots/noindex block, broken canonical, manual action, or security issue was found. The sitemap report's fetch failure has no identified repository-side cause: Google's own live test fetched the same URL successfully. Keep this processing issue separate from the confirmed sitemap submission and the successful homepage live test.

## Lightweight follow-up

1. Next check: **October 12, 2026**. Open the property above and inspect `https://kaimingliu-ai.github.io/`. Read the **Google Index** result, last crawl, indexing reason, and Google-selected canonical; record the date and result. Use this result to determine actual indexing, rather than relying solely on a `site:` query.
2. Open **Sitemaps** and inspect the existing `/sitemap.xml` entry. Confirm its processing status, last read, and discovered pages. **Success** means the sitemap was fetched and read; it does not prove that its URLs are indexed. If the fetch error persists, inspect its details and live-test that exact URL, checking Crawl allowed and Page fetch. Fix only a demonstrated problem, then resubmit once if needed. Google retries failed sitemap fetches for a few days.
3. Check **Pages** for the indexing reason and **Settings → Crawl stats** when data becomes available. Consult **Manual actions** and **Security issues** if a reported problem warrants it.
4. If the homepage is still pending without a technical error, check again around **October 17**, then weekly while pending. Do not repeatedly request indexing for an unchanged homepage: repeated submissions do not improve queue priority. A further request is appropriate after a meaningful page change or correction of an actual indexing blocker.
5. After future deployments, confirm that the verification file, homepage canonical, robots, sitemap, and CV still work. A new Google account must obtain and deploy its own official ownership proof; do not overwrite another owner's proof.

These are follow-up instructions; no recurring automation has been scheduled. Google describes crawling as potentially taking days to weeks and does not guarantee indexing. See [URL Inspection](https://support.google.com/webmasters/answer/9012289), [Sitemaps report and fetch troubleshooting](https://support.google.com/webmasters/answer/7451001), [ownership verification](https://support.google.com/webmasters/answer/9008080), and [requesting a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

## Migration from the former host

The former homepage was `https://kl543.github.io/`. Test that URL and the former CV URL after the GitHub account and Pages repository are renamed, and record their HTTP status and redirect destination. GitHub's repository redirects do not establish that a Pages hostname redirects. Account renaming removes control of the former username's Pages hostname, so this repository cannot supply or guarantee a permanent redirect there. The legacy routes within the new host still redirect to the existing homepage anchors.

Observed on October 10, 2026, after successful deployment: the former homepage and CV both returned **404 without a redirect**, and `https://github.com/kl543` returned 404. The former repository URL, `https://github.com/kl543/kl543.github.io`, returned **301** to `https://github.com/kaimingliu-ai/kaimingliu-ai.github.io`. The new homepage, CV, robots, and sitemap returned 200. These are recorded observations, not guarantees of future redirect behavior.

Google's **Change of Address** tool requires verified ownership of the old and new properties and working permanent redirects. Use it only if those prerequisites can actually be satisfied. If the old Pages host returns 404 or cannot be controlled, do not claim the tool was completed or invent a redirect; verify the new property, submit its sitemap, request homepage indexing, and update external profile links to the new URL. Retain any existing old-property ownership evidence. Indexing and rankings are not guaranteed by correct metadata or sitemap submission.

References: [GitHub username changes](https://docs.github.com/en/account-and-profile/concepts/username-changes), [renaming a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository), [Google Change of Address](https://support.google.com/webmasters/answer/9370220), and [moving a site with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).
