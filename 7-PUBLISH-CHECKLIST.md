# Website release checks

Before publishing any page changes:

1. Read the current index and app; preserve unrelated changes and existing articles.
2. Serve the candidate checkout locally: `python -m http.server 8080`.
3. Run `BASE_URL=http://127.0.0.1:8080 python 6-site-health.py`.
4. Review the JSON report and desktop/mobile screenshots. Check every changed page in actual pixels. A successful HTTP response is not proof of a working widget.
5. Do not publish a new missing image, missing page, missing sentiment market or empty chart. Existing broken external images are recorded in `known-image-findings.json` and remain visible as failures, not silently waived. Do not change old article content without permission.
6. After publication, run the same checks against the live site and inspect changed pages in pixels before saying done.

The daily workflow uses standard Ubuntu runners in a public repository, with no paid service, no artifact upload/storage or account login. It writes failure details to the workflow summary/log. Its scheduled start is best effort, not an exact delivery guarantee. A separate daily review checks the result and reports actionable failures. No automated check can guarantee there will never be a future third-party outage.

The pull-request workflow reports a check. It is not a branch-protection requirement, and direct main commits are not mechanically blocked. The release checklist is mandatory for our publishing workflow; enforcing it for all contributors would require repository branch/deployment settings.
